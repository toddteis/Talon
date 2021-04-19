import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';


interface Props {
    orders: Order[];
    selectOrder: (id: string) => void;
    deleteOrder: (id: string) => void;
}

export default function OrderList({orders, selectOrder, deleteOrder}: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {orders.map(order => (
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
                        <Button onClick={() => selectOrder(order.id)} floated='right' content='View' color='blue'/>
                        <Button onClick={() => deleteOrder(order.id)} floated='right' content='Delete' color='red'/>
                        <Label basic content={order.product} />
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}