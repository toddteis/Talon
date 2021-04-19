import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Order } from '../models/order';
import NavBar from './NavBar';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import {v4 as uuid} from 'uuid';

function App() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Order[]>('http://localhost:5000/api/orders').then(response => {
      setOrders(response.data);
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
    order.id 
      ? setOrders([...orders.filter(x => x.id !== order.id), order])
      : setOrders([...orders, {...order, id: uuid()}]);
    setEditMode(false);
    setSelectedOrder(order);
  }

  function handleDeleteOrder(id: string) {
    setOrders([...orders.filter(x => x.id !== id)])
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
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
        />
      </Container>
    </>
  );
}

export default App;
