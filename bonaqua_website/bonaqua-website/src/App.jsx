import React from 'react';
import './css/style.css'
import Header from './components/Header';
import Content from './components/Content';
import Order from './components/Order/Order';
import Footer from './components/Footer';
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="contain flex flex-col">
      <Header />
      <Routes>
        <Switch>
          <div className='content'>
            <Route exact path="/" component={Content} />
            <Route path="/order" component={Order} />
          </div>
        </Switch>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
