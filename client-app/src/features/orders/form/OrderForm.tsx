import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Form, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

export default observer(function OrderForm() {
    const history = useHistory();
    const {orderStore} = useStore();
    const { createOrder, updateOrder, loading, loadOrder, loadingInitial} = orderStore;
    const {id} = useParams<{id: string}>();

    const [order, setOrder] = useState({
        id: '',
        customer: '',
        dateOrdered: '',
        dateShipped: '',
        product: '',
        amount: '',
        deliveryAddress: ''
    });

    useEffect(() => {
        if (id) loadOrder(id).then(order => setOrder(order!))
    }, [id, loadOrder]);

    function handleSubmit() {
        if (order.id.length === 0) {
            let newOrder = {
                ...order,
                id: uuid()
            };
            createOrder(newOrder).then(() => history.push(`/orders/${newOrder.id}`))
        } else {
            updateOrder(order).then(() => history.push(`/orders/${order.id}`))
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} =event.target;
        setOrder({...order, [name]: value})
    }

    if (loadingInitial) return <LoadingComponent content='Loading order...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Customer' value={order.customer} name='customer' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Date Ordered' value={order.dateOrdered} name='dateOrdered' onChange={handleInputChange} />
                <Form.Input type='date' placeholder='Date Shipped' value={order.dateShipped} name='dateShipped' onChange={handleInputChange} />
                <Form.Input placeholder='Product' value={order.product} name='product' onChange={handleInputChange} />
                <Form.Input placeholder='Amount' value={order.amount} name='amount' onChange={handleInputChange} />
                <Form.Input placeholder='Delivery Address' value={order.deliveryAddress} name='deliveryAddress' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button as={Link} to='/orders' floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})