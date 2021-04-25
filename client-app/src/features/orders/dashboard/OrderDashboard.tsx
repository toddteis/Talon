import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import OrderList from './OrderList';

export default observer(function OrderDashboard() {
    const { orderStore } = useStore();
    const {loadOrders, orderRegistry} = orderStore;

    useEffect(() => {
        if (orderRegistry.size <= 1) loadOrders();
    }, [orderRegistry.size, loadOrders])

    if (orderStore.loadingInitial) return <LoadingComponent content='Loading orders...' />

    return (
        <Grid>
            <Grid.Column width='16'>
                <OrderList />
            </Grid.Column>
        </Grid>
    )
})