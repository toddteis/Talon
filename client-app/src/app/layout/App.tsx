import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ProductsPage from '../../features/products/ProductsPage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ResourcesPage from '../../features/resources/ResourcesPage';
import OrderForm from '../../features/orders/form/OrderForm';
import OrderDetails from '../../features/orders/details/OrderDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Route exact path='/' component={HomePage} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route exact path='/orders' component={OrderDashboard} />
        <Route path='/orders/:id' component={OrderDetails} />
        <Route key={location.key} path={['/createOrder', '/manage/:id']} component={OrderForm} />
        <Route path='/resources' component={ResourcesPage} />
      </Container>
    </>
  );
}

export default observer(App);
