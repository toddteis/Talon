import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Order } from '../../../app/models/order';

interface Props {
    order: Order | undefined;
    closeForm: () => void;
    createOrEdit: (order: Order) => void;
}

export default function OrderForm({ order: selectedOrder, closeForm, createOrEdit }: Props) {

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
        createOrEdit(order);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} =event.target;
        setOrder({...order, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Customer' value={order.customer} name='customer' onChange={handleInputChange} />
                <Form.Input placeholder='Date Ordered' value={order.dateOrdered} name='dateOrdered' onChange={handleInputChange} />
                <Form.Input placeholder='Date Shipped' value={order.dateShipped} name='dateShipped' onChange={handleInputChange} />
                <Form.Input placeholder='Product' value={order.product} name='product' onChange={handleInputChange} />
                <Form.Input placeholder='Amount' value={order.amount} name='amount' onChange={handleInputChange} />
                <Form.Input placeholder='Delivery Address' value={order.deliveryAddress} name='deliveryAddress' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}