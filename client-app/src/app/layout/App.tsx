import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import OrderDashboard from '../../features/orders/dashboard/OrderDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch, useLocation } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ProductsPage from '../../features/products/ProductsPage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ResourcesPage from '../../features/resources/ResourcesPage';
import OrderForm from '../../features/orders/form/OrderForm';
import OrderDetails from '../../features/orders/details/OrderDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={ProductsPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/orders' component={OrderDashboard} />
          <Route path='/orders/:id' component={OrderDetails} />
          <Route key={location.key} path={['/createOrder', '/manage/:id']} component={OrderForm} />
          <Route path='/resources' component={ResourcesPage} />
          <Route path='/errors' component={TestErrors} />
          <Route path='/server-error' component={ServerError} />
          <Route component={NotFound} />
        </Switch>

      </Container>
    </>
  );
}

export default observer(App);
