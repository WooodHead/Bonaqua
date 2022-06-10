import React, { createContext, useState, useEffect } from 'react';
import './css/style.css';
import Header from './components/Header';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';
import OrderInfo from './components/Order/OrderInfo';
import Payment from './components/Order/Payment';
import OrderHistory from './components/Order/OrderHistory';
import Content from './components/Content';
import Home from './components/Home';

export const AppContext = createContext();

function App() {
  const [value, setValues] = useState("");
  const [circle, setCircle] = useState("");
  const [random, setRandom] = useState("");
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [array, setArray] = useState([]);
  const [userarray, setUserArray] = useState([]);
  const [render, setRender] = useState(false);

  return (
    <AppContext.Provider value={{ value, setValues, total, setTotal, 
    array, setArray, item, setItem, userarray, 
    setUserArray, setCircle, circle,
    setRandom, random }}>
      <div className="contain">
        <Header />
        <div className='routes'>
          <Routes>
            <Switch>
              <Route exact path="/" component={Content} render={{ render, setRender }} />
              <Route path="/order" component={Order} render={{ render, setRender }} />
              <Route path="/orderToPayment" component={OrderInfo} render={{ render, setRender }} />
              <Route path="/payment" component={Payment} render={{ render, setRender }} />
              <Route path="/orderHistory" component={OrderHistory} render={{ render, setRender }} />
            </Switch>
          </Routes>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
