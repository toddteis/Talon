import { observer } from 'mobx-react-lite';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import OrderDetails from '../details/OrderDetails';
import OrderForm from '../form/OrderForm';
import OrderList from './OrderList';

export default observer(function OrderDashboard() {
    const {orderStore} = useStore();
    const {selectedOrder, editMode} = orderStore;
    
    return (
        <Grid>
            <Grid.Column width='10'>
                <OrderList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedOrder && !editMode &&
                <OrderDetails />}
                {editMode &&
                <OrderForm />}
            </Grid.Column>
        </Grid>
    )
})