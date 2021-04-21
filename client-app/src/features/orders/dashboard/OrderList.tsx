import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function OrderList() {
    const { orderStore } = useStore();
    const {deleteOrder, loading, ordersByDate} = orderStore;

    const [target, setTarget] = useState('');

    function handleOrderDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteOrder(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {ordersByDate.map(order => (
                    <Item key={order.id}>
                        <Item.Header as='a'>{order.customer}</Item.Header>
                        <Item.Meta>
                            {order.dateOrdered}, {order.dateShipped}
                        </Item.Meta>
                        <Item.Description>
                            <div>{order.product}</div>
                            <div>{order.amount}</div>
                            <div>{order.deliveryAddress}</div>
                        </Item.Description>
                        <Button as={Link} to={`/orders/${order.id}`} floated='right' content='View' color='blue' />
                        <Button
                            name={order.id}
                            loading={loading && target === order.id}
                            onClick={(e) => handleOrderDelete(e, order.id)}
                            floated='right'
                            content='Delete'
                            color='red' />
                        <Label basic content={order.product} />
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})