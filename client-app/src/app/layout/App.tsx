import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { Order } from '../models/order';
import NavBar from './NavBar';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import { v4 as uuid } from 'uuid';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    agent.Orders.list().then(response => {
      let orders: Order[] = [];
      response.forEach(order => {
        order.dateOrdered = order.dateOrdered.split('T')[0];
        order.dateShipped = order.dateShipped.split('T')[0];
        orders.push(order);
      })
      setOrders(orders);
      setLoading(false);
    })
  }, [])

  function handleSelectOrder(id: string) {
    setSelectedOrder(orders.find(x => x.id === id));
  }

  function handleCancelSelectOrder() {
    setSelectedOrder(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectOrder(id) : handleCancelSelectOrder();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditOrder(order: Order) {
    setSubmitting(true);
    if (order.id) {
      agent.Orders.update(order).then(() => {
        setOrders([...orders.filter(x => x.id !== order.id), order])
        setSelectedOrder(order);
        setEditMode(false);
        setSubmitting(false);
      })
    } else {
      order.id = uuid();
      agent.Orders.create(order).then(() => {
        setOrders([...orders, order]);
        setSelectedOrder(order);
        setEditMode(false);
        setSubmitting(false);
      })
    }
  }

  function handleDeleteOrder(id: string) {
    setSubmitting(true);
    agent.Orders.delete(id).then(() => {
      setOrders([...orders.filter(x => x.id !== id)])
      setSubmitting(false);
    })
  }

  if (loading) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>
        <OrderDashboard
          orders={orders}
          selectedOrder={selectedOrder}
          selectOrder={handleSelectOrder}
          cancelSelectOrder={handleCancelSelectOrder}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditOrder}
          deleteOrder={handleDeleteOrder}
          submitting={submitting}
        />
      </Container>
    </>
  );
}

export default App;
