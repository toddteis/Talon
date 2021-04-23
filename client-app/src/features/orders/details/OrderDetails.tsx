import { observer } from 'mobx-react-lite';
import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function OrderDetails() {
    const { orderStore } = useStore();
    const { selectedOrder: order, loadOrder, loadingInitial } = orderStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) loadOrder(id);
    }, [id, loadOrder]);

    if (loadingInitial || !order) return <LoadingComponent />;

    return (
        <Fragment>
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Order Number</Table.HeaderCell>
                        <Table.HeaderCell>Customer</Table.HeaderCell>
                        <Table.HeaderCell>Order Date</Table.HeaderCell>
                        <Table.HeaderCell>Shipped Date</Table.HeaderCell>
                        <Table.HeaderCell>Product Ordered</Table.HeaderCell>
                        <Table.HeaderCell>Amount</Table.HeaderCell>
                        <Table.HeaderCell>Delivery Address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{order.id}</Table.Cell>
                        <Table.Cell>{order.customer}</Table.Cell>
                        <Table.Cell>{order.dateOrdered}</Table.Cell>
                        <Table.Cell>{order.dateShipped}</Table.Cell>
                        <Table.Cell>{order.product}</Table.Cell>
                        <Table.Cell>{order.amount}</Table.Cell>
                        <Table.Cell>{order.deliveryAddress}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colspan='7'>
                            <Button floated='right' as={Link} to={`/manage/${order.id}`} basic color='blue' content='Edit'/>
                            <Button floated='right' as={Link} to='/orders' basic color='grey' content='Cancel' />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Fragment>
    )
})