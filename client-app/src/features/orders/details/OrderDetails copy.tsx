import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card } from 'semantic-ui-react';
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
                    <Button as={Link} to={`/manage/${order.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/orders' basic color='grey' content='Cancel' />
                </Button.Group>

            </Card.Content>
            
        </Card>


    )
})