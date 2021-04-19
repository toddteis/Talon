import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';
import OrderDetails from '../details/OrderDetails';
import OrderForm from '../form/OrderForm';
import OrderList from './OrderList';

interface Props {
    orders: Order[];
    selectedOrder: Order | undefined;
    selectOrder: (id: string) => void;
    cancelSelectOrder: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (order: Order) => void;
    deleteOrder: (id: string) => void;
}

export default function OrderDashboard({orders, selectedOrder, selectOrder, 
        cancelSelectOrder, editMode, openForm, closeForm, createOrEdit, deleteOrder}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <OrderList orders={orders} 
                    selectOrder={selectOrder}
                    deleteOrder={deleteOrder}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedOrder && !editMode &&
                <OrderDetails 
                    order={selectedOrder} 
                    cancelSelectOrder={cancelSelectOrder} 
                    openForm={openForm}
                />}
                {editMode &&
                <OrderForm closeForm={closeForm} order={selectedOrder} createOrEdit={createOrEdit} />}
            </Grid.Column>
        </Grid>
    )
}