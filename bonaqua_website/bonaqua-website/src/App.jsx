import React from 'react';
import './css/style.css'
import Header from './components/Header';
import Content from './components/Content';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import OrderInfo from './components/Order/OrderInfo';
import Payment from './components/Order/Payment';

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
        </Switch>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
