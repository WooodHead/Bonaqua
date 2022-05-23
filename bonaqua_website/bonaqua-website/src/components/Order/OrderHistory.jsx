import React from 'react';
import insta from '../../images/svg/home/Instagram.svg';
import fb from '../../images/svg/home/Facebook.svg';
import twitter from '../../images/svg/home/Twitter.svg';
import bonaqua from '../../images/bona0.5.png';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import AllOrder from '../orderHistory/AllOrder';
import OrderConfirm from '../orderHistory/orderConfirm';
import OrderDelivered from '../orderHistory/OrderDelivered';

export default function OrderHistory() {
  return (
    <div className='mx-auto flex flex-col justify-between'>
      <div className='flex flex-col md:flex-row'>
        <div className='choosing w-full md:w-1/2 flex items-center justify-center relative'>

          <div className='bona flex justify-center items-end relative'>
            <img src={bonaqua} alt="" className='' />

            <div className='toirog absolute'>
              <div className='white flex justify-center items-center'>
                <div className='circle relative flex justify-center items-center'>
                  <p className='text-white font-semibold'>500 <span className='text-xs'>мл</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='info w-1/2 mr-16 mt-3'>
          <h1 className=''>Захиалгын түүх</h1>
          <Router>
              <div className='orderHistoryLink'>
                <div className='link flex justify-between py-3'>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/allorder">
                    Бүгд
                  </NavLink>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/orderConfirm">
                    Баталгаажсан
                  </NavLink>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/orderDelivered">
                    Хүргэгдсэн
                  </NavLink>
                  <div className="sort flex justify-end">
                        <select name="" id="" className='select w-full'>
                          <option value="" className=''>Сүүлийнх нь эхэндээ</option>
                          <option value=""></option>
                        </select>
                  </div>
                </div>
                <div className=''>
                  <Switch>
                    <Route exact path="/allorder" children={<AllOrder />} />
                    <Route path="/orderConfirm" children={<OrderConfirm />} />
                    <Route path="/orderDelivered" children={<OrderDelivered />} />
                  </Switch>
                </div>
              </div>
            </Router>
        </div>

        <div className='social flex flex-col justify-center items-center'>
          <img src={insta} alt="" className='sc' />
          <img src={fb} alt="" className='sc' />
          <img src={twitter} alt="" className='sc' />
        </div>
      </div>
    </div>
  )
}
