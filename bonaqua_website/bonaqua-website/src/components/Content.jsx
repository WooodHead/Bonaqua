import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instruction from './ProductInformation/Instruction';
import Nutrition from './ProductInformation/Nutrition';
import Product from './ProductInformation/Product';
import water from '../images/svg/home/water 2.svg';
import insta from '../images/svg/home/Instagram.svg';
import fb from '../images/svg/home/Facebook.svg';
import twitter from '../images/svg/home/Twitter.svg';
import productInfo from '../images/svg/home/buteegdhuunii medeelel.svg';
import button from '../images/svg/home/Button.svg';
import bonaqua from '../images/bona0.5.png';
import list from '../images/svg/order 1/Ellipse -1.svg';

export default function Content() {
  function show330() {
    var ml330 = document.getElementById("ml330");
    ml330.innerHTML = "330ml";
  }
  function show500() {
    var ml500 = document.getElementById("ml500");
    ml500.innerHTML = "500ml"
  }

  return (
      <div className='mx-auto flex flex-col justify-between'>
        <div className='flex'>

          <div className='choosing w-1/2 flex items-center relative'>

            <div className='choose flex justify-center self-center'>
              <ul className='chooseList flex flex-col justify-between cursor-pointer' id="ml">
                <li id='ml330'>
                  <img src={list} alt="" />
                </li>
                <li id='ml500'>
                  <img src={list} alt="" />
                </li>
                <li id='ml330'>
                  <img src={list} alt="" />
                </li>
                <li id='ml330'>
                  <img src={list} alt="" />
                </li>
                <li id='ml330'>
                  <img src={list} alt="" />
                </li>
                <li id='ml330' >
                  <img src={list} alt="" />
                </li>
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

          <div className='info w-1/2 pl-4'>
            <div className='water'>
              <img src={water} alt="" />
            </div>

            <div className='pl-3'>

              <div className='flex justify-between'>
                <div className='sagslah'>
                  <p className='font-semibold text-xl mb-4'>Bonaqua 500ml - 1.500₮</p>
                  <div className='flex busketButton'>
                    {/* <img src={table} alt="" className='tableImg' /> */}

                    <form action="" className='flex relative'>
                      <select name="" id="" className='select'>
                        <option value="330" className='option'>330 мл</option>
                        <option value="500">500 мл</option>
                        <option value="800">800 мл</option>
                        <option value="1.5">1.5 л</option>
                      </select>
                      <select name="" id="" className='select'>
                        <option value="330">24.600₮</option>
                        <option value="500">24.600₮</option>
                        <option value="800">24.600₮</option>
                        <option value="1.5">24.600₮</option>
                      </select>
                      <div className='selectTotal'>
                        <p className='total pt-3 text-red-700'>24.600₮</p>
                      </div>
                      <div className='tablenames absolute flex text-xs mt-2'>
                        <div className='tablename1'>
                          <p className=''>Хэмжээ</p>
                        </div>
                        <div className='tablename2'>
                          <p className=''>Багц</p>
                        </div>
                        <div className='tablename3'>
                          <p className=''>Нийт үнэ</p>
                        </div>
                      </div>

                      <Link className='nav-link' to="/order">
                        <img src={button} alt="" className='buttonImg' />
                      </Link>
                    </form>

                  </div>
                </div>

              </div>
              <div className='productInfo'>
                <img src={productInfo} alt="" className='w-full' />
              </div>
              <Router>
              <div className='ChangeInfo'>
                <div className='link flex justify-between py-3'>
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
              </Router>
            </div>

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
