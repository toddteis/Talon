import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default function OrderDetails() {
    const {orderStore} = useStore();
    const {selectedOrder: order, openForm, cancelSelectedOrder} = orderStore;

    if(!order) return <LoadingComponent />;

    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{order.customer}</Card.Header>
                <Card.Meta>
                    <span>{order.dateOrdered}</span>
                </Card.Meta>
                <Card.Description>
                    {order.product}, {order.amount}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={() =>openForm(order.id) } basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedOrder} basic color='grey' content='Cancel' />
                </Button.Group>

            </Card.Content>
        </Card>
    )
}