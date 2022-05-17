import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instruction from './ProductInformation/Instruction';
import Nutrition from './ProductInformation/Nutrition';
import Product from './ProductInformation/Product';
import water from '../images/svg/home/water 2.svg';
import flower from '../images/svg/home/tsetseg tom.svg';
import insta from '../images/svg/home/Instagram.svg';
import fb from '../images/svg/home/Facebook.svg';
import twitter from '../images/svg/home/Twitter.svg';
import table from '../images/svg/home/sagslag husnegt.svg';
import productInfo from '../images/svg/home/buteegdhuunii medeelel.svg';
import button from '../images/svg/home/Button.svg';
import bonaqua from '../images/bona0.5.png';
import Footer from './Footer';

export default function Content() {
  return (
    <Router>
      <div className='mx-auto flex flex-col justify-between'>
        <div className='flex'>

          <div className='choosing w-1/2 flex items-center relative'>

            <div className='choose flex justify-center self-center'>
              <ul>
                <li>sdf</li>
              </ul>
            </div>

            <div className='bona flex justify-center items-end rounded-full relative'>
              <img src={bonaqua} alt="" />

              <div className='toirog absolute'>
                {/* <img src={toirog} alt="" className='' /> */}
                <div className='white flex justify-center items-center'>
                  <div className='circle relative flex justify-center items-center'>
                    <p className='text-white font-semibold'>500 <span className='text-xs'>мл</span> </p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className='info w-1/2 flex flex-col justify-between pl-4'>
            <div className='water'>
              <img src={water} alt="" />
            </div>

            <div className='pl-3'>

              <div className='flex w-full justify-between'>
                <div className='sagslah'>
                  <p className='font-semibold text-xl mb-5'>Bonaqua 500ml - 1.500₮</p>
                  <div className='flex busketButton'>
                    <img src={table} alt="" className='tableImg' />
                    <Link className='nav-link' to="/order">
                      <img src={button} alt="" className='buttonImg' />
                    </Link>

                  </div>
                </div>

                <div className='social flex flex-col items-center'>
                  <img src={insta} alt="" className='sc' />
                  <img src={fb} alt="" className='sc' />
                  <img src={twitter} alt="" className='sc' />
                </div>

              </div>
              <div className='productInfo mb-3'>
                <img src={productInfo} alt="" />
              </div>

              <div className='ChangeInfo py-3'>
                <div className='link flex justify-around py-3'>
                  <Link className="nav-link" activeClassName="active" to="/">
                    Бүтээгдэхүүний тайлбар 
                  </Link>
                  <Link className="nav-link" to="/instruction">
                    Хадгалах заавар
                  </Link>
                  <Link className="nav-link" to="/nutrition">
                    Тэжээллэг чанар
                  </Link>
                </div>
                <div className=''>
                  <Switch>
                    <Route exact path="/" children={<Product />} />
                    <Route path="/instruction" children={<Instruction />} />
                    <Route path="/nutrition" children={<Nutrition />} />
                  </Switch>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}
