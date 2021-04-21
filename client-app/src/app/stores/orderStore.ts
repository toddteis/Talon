import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Order } from "../models/order";

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
        this.loadingInitial = true;
        try {
            const orders = await agent.Orders.list();
            orders.forEach(order => {
                this.setOrder(order);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadOrder = async (id: string) => {
        let order = this.getOrder(id);
        if (order) {
            this.selectedOrder = order;
            return order;
        } else {
            this.loadingInitial = true;
            try {
                order = await agent.Orders.details(id);
                this.setOrder(order);
                runInAction(() => {
                    this.selectedOrder = order;
                })
                this.setLoadingInitial(false);
                return order;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private setOrder = (order: Order) => {
        order.dateOrdered = order.dateOrdered.split('T')[0];
        order.dateShipped = order.dateShipped.split('T')[0];
        this.orderRegistry.set(order.id, order);
    }

    private getOrder = (id: string) => {
        return this.orderRegistry.get(id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createOrder = async (order: Order) => {
        this.loading = true;
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
