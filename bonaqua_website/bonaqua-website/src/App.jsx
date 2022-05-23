import React from 'react';
import './css/style.css';
import Header from './components/Header';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import OrderInfo from './components/Order/OrderInfo';
import Payment from './components/Order/Payment';
import Content from './components/Content';
import OrderHistory from './components/Order/OrderHistory';

function App() {

  return (
    <div className="contain">
      <Header />
      <div className='routes'>
      <Routes>
        <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/order" component={Order}/>
            <Route path="/orderToPayment" component={OrderInfo} />
            <Route path="/payment" component={Payment} />
            <Route path="/orderHistory" component={OrderHistory} />
        </Switch>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
