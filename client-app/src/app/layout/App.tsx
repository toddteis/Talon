import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { orderStore } = useStore();

  useEffect(() => {
    orderStore.loadOrders();
  }, [orderStore])

  if (orderStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <OrderDashboard />
      </Container>
    </>
  );
}

export default observer(App);
