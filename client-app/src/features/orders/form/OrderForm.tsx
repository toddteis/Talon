import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function OrderForm() {
    const {orderStore} = useStore();
    const {selectedOrder, closeForm, createOrder, updateOrder, loading} = orderStore;

    const initialState = selectedOrder ?? {
        id: '',
        customer: '',
        dateOrdered: '',
        dateShipped: '',
        product: '',
        amount: '',
        deliveryAddress: ''
    }

    const [order, setOrder] = useState(initialState);

    function handleSubmit() {
        order.id ? updateOrder(order) : createOrder(order);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} =event.target;
        setOrder({...order, [name]: value})
    }

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
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
})