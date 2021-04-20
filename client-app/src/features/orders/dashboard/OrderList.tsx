import React, { SyntheticEvent, useState } from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';


interface Props {
    orders: Order[];
    selectOrder: (id: string) => void;
    deleteOrder: (id: string) => void;
    submitting: boolean;
}

export default function OrderList({orders, selectOrder, deleteOrder, submitting}: Props) {
    const [target, setTarget] = useState('');

    function handleOrderDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteOrder(id);
    }
    
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
                        <Button 
                            name={order.id}
                            loading={submitting && target === order.id } 
                            onClick={(e) => handleOrderDelete(e, order.id)} 
                            floated='right' 
                            content='Delete' 
                            color='red'/>
                        <Label basic content={order.product} />
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}