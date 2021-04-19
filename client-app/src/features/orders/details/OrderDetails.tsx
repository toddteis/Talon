import React from 'react';
import { Button, Card } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';

interface Props {
    order: Order
    cancelSelectOrder: () => void;
    openForm: (id: string) => void;
}

export default function OrderDetails({ order, cancelSelectOrder, openForm }: Props) {
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
                    <Button onClick={cancelSelectOrder} basic color='grey' content='Cancel' />
                </Button.Group>

            </Card.Content>
        </Card>
    )
}