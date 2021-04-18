import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/orders').then(response => {
      console.log(response);
      setOrders(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='list' content='Orders' />
      <List>
        {orders.map((order: any) => (
          <List.Item key={order.id}>
            {order.customer}
          </List.Item>
        ))}
      </List>
    </div >
  );
}

export default App;
