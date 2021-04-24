import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import {format} from 'date-fns';

export default observer(function OrderList() {
    const { orderStore } = useStore();
    const { deleteOrder, loading, ordersByDate } = orderStore;

    const [target, setTarget] = useState('');

    function handleOrderDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteOrder(id);
    }

    return (
        <Table striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Customer</Table.HeaderCell>
                    <Table.HeaderCell>Order Date</Table.HeaderCell>
                    <Table.HeaderCell>Shipped Date</Table.HeaderCell>
                    <Table.HeaderCell>Product Ordered</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {ordersByDate.map(order => (
                    <Table.Row key={order.id}>
                        <Table.Cell>{order.customer}</Table.Cell>
                        <Table.Cell>{format(order.dateOrdered!, 'dd MMM yyyy' )}</Table.Cell>
                        <Table.Cell>{format(order.dateShipped!, 'dd MMM yyyy')}</Table.Cell>
                        <Table.Cell>{order.product}</Table.Cell>
                        <Table.Cell>{order.amount}</Table.Cell>
                        <Table.Cell><Button as={Link} to={`/orders/${order.id}`} floated='right' content='View' color='blue' /></Table.Cell>
                        <Table.Cell><Button
                                    name={order.id}
                                    loading={loading && target === order.id}
                                    onClick={(e) => handleOrderDelete(e, order.id)}
                                    floated='right'
                                    content='Delete'
                                    color='red' />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
})