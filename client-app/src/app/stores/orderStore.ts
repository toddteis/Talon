import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Order } from "../models/order";
import {v4 as uuid} from 'uuid';

export default class OrderStore {
    orderRegistry = new Map<string, Order>();
    selectedOrder: Order | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get ordersByDate() {
        return Array.from(this.orderRegistry.values()).sort((a, b) => Date.parse(a.dateOrdered) - Date.parse(b.dateOrdered));
    }

    loadOrders = async () => {
        try {
            const orders = await agent.Orders.list();
            orders.forEach(order => {
                order.dateOrdered = order.dateOrdered.split('T')[0];
                order.dateShipped = order.dateShipped.split('T')[0];
                this.orderRegistry.set(order.id, order);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectOrder = (id: string) => {
        this.selectedOrder = this.orderRegistry.get(id);
    }

    cancelSelectedOrder = () => {
        this.selectedOrder = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectOrder(id) : this.cancelSelectedOrder();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createOrder = async (order: Order) => {
        this.loading = true;
        order.id = uuid();
        try {
            await agent.Orders.create(order);
            runInAction(() => {
                this.orderRegistry.set(order.id, order);
                this.selectedOrder = order;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateOrder = async (order: Order) => {
        this.loading = true;
        try {
            await agent.Orders.update(order);
            runInAction(() => {
                this.orderRegistry.set(order.id, order);
                this.selectedOrder = order;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteOrder = async (id: string) => {
        this.loading = true;
        try {
            await agent.Orders.delete(id);
            runInAction(() => {
                this.orderRegistry.delete(id);
                if (this.selectedOrder?.id === id) this.cancelSelectedOrder();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}
