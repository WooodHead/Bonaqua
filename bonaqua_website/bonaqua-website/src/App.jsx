import React, { createContext, useState, useEffect } from 'react';
import './css/style.css';
import './css/mediaQuery.css';
import Header from './components/Header';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Switch, Route, Router } from 'react-router-dom';
import OrderInfo from './components/Order/OrderInfo';
import Payment from './components/Order/Payment';
import OrderHistory from './components/Order/OrderHistory';
import Content from './components/Content';

export const AppContext = createContext();

function App() {
  const [value, setValues] = useState("");
  const [circle, setCircle] = useState("");
  const [random, setRandom] = useState("");
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [orderid, setOrderid] = useState("");
  const [array, setArray] = useState([]);
  const [userarray, setUserArray] = useState([]);
  const [render, setRender] = useState(false);
  const [pack, setPack] = useState([]);
  const [size, setSize] = useState([]);
  const [incase, setIncase] = useState([]);
  const [access_token, setAccess_Token] = useState("");
  const [invoice_id, setInvoice_id] = useState("");
  const [qr_text, setQR_text] = useState("");
  const [qr_image, setQR_image] = useState("")

  return (
    <AppContext.Provider
      value={{
        value, setValues,
        total, setTotal,
        array, setArray,
        item, setItem,
        userarray, setUserArray,
        circle, setCircle,
        orderid, setOrderid,
        random, setRandom,
        pack, setPack,
        size, setSize,
        incase, setIncase,
        access_token, setAccess_Token,
        invoice_id, setInvoice_id,
        qr_text, setQR_text,
        qr_image, setQR_image

      }}
      render={{ render, setRender }}>

      <div className="contain">
        <Header />
        <div className='routes'>
          <Routes>
            <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/order" component={Order} />
              <Route path="/userinfo" component={OrderInfo} />
              <Route path="/payment" component={Payment} />
              <Route path="/orderHistory" component={OrderHistory} />
            </Switch>
          </Routes>
        </div>
        <Footer />
      </div>

    </AppContext.Provider>
  )
}

export default App
