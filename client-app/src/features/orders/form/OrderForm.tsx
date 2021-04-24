import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Header, Segment } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { Formik, Form, } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { productOptions } from '../../../app/common/form/options/productOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';
import { Order } from '../../../app/models/order';

export default observer(function OrderForm() {
    const history = useHistory();
    const { orderStore } = useStore();
    const { createOrder, updateOrder, loading, loadOrder, loadingInitial } = orderStore;
    const { id } = useParams<{ id: string }>();

    const [order, setOrder] = useState<Order>({
        id: '',
        customer: '',
        dateOrdered: null,
        dateShipped: null,
        product: '',
        amount: '',
        deliveryAddress: ''
    });

    const validationSchema = Yup.object({
        customer: Yup.string().required('The order customer is required'),
        dateOrdered: Yup.string().required('Order date is required').nullable(),
        dateShipped: Yup.string().required('Shipped date is required').nullable(),
        product: Yup.string().required(),
        amount: Yup.string().required(),
        deliveryAddress: Yup.string().required(),

    })

    useEffect(() => {
        if (id) loadOrder(id).then(order => setOrder(order!))
    }, [id, loadOrder]);

    function handleFormSubmit(order: Order) {
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

    if (loadingInitial) return <LoadingComponent content='Loading order...' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={order}
                onSubmit={values => handleFormSubmit(values)} >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <Header content='Order Details' sub />
                        <MyTextInput name='customer' placeholder='Customer' />
                        <MyDateInput 
                            placeholderText='Date Ordered' 
                            name='dateOrdered'
                            dateFormat='d MMMM, yyyy'
                        />
                        <MyDateInput 
                            placeholderText='Date Shipped'
                            name='dateShipped'
                            dateFormat='d MMMM, yyyy'
                        />
                        <MySelectInput options={productOptions} placeholder='Product' name='product' />
                        <MyTextInput placeholder='Amount' name='amount' />
                        <MyTextInput placeholder='Delivery Address' name='deliveryAddress' />
                        <Button 
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated='right' 
                            positive type='submit' content='Submit' 
                        />
                        <Button as={Link} to='/orders' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
})