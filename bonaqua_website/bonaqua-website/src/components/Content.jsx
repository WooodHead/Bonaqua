import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
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

  const [capacity, setCapacity] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch('http://localhost:8080/api/bonaqua', {
          headers: {
            "Content-Type": "application/json"
          },
        });

        const resData = await data.json();

        setCapacity(resData);

        return resData;
      } catch(err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  const datas = [];
  for(let i=0; i < capacity.length; i++) {
    datas.push(capacity[i].Capacity);
  }
  var Incase = {
        "one" : {
          "case": 12,
          "price": 950
        },
        "two" : {
          "case": 6,
          "price": 1480
        },
        "three" : {
          "case": 4,
          "price": 3130
        },
  };
  console.log(Incase.one.case);

  return (
      <div className='mx-auto flex flex-col justify-between'>
        <div className='flex flex-col md:flex-row'>
          <div className='choosing w-full md:w-1/2 flex items-center relative'>
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

          <div className='info w-full md:w-1/2 pl-4'>
            <div className='water'>
              <img src={water} alt="" />
            </div>

            <div className='pl-3'>

              <div className='flex justify-between'>
                <div className='sagslah'>
                  <p className='font-semibold text-xl mb-4'>Bonaqua 500ml - 1.500₮</p>
                  <div className='flex busketButton'>
                    {/* <img src={table} alt="" className='tableImg' /> */}

                    <form action="" id="mlform" className='flex relative'>
                      <select name="ml" id="mlselect" className='select'>
                          <option id='quantity' value={datas[0]}>{datas[0]}</option> 
                          <option id='quantity' value={datas[1]}>{datas[1]}</option>
                          <option id='quantity' value={datas[2]}>{datas[2]}</option>
                          <option id='quantity' value={datas[3]}>{datas[3]}</option>
                          <option id='quantity' value={datas[4]}>{datas[4]}</option>
                          <option id='quantity' value={datas[5]}>{datas[5]}</option> 
                          <option id='quantity' value={datas[6]}>{datas[6]}</option> 
                      </select>
                      <select name="avdar" id="avdar" className='select'>
                          <option value={Incase.one.case}>{Incase.one.case * Incase.one.price}₮</option>
                          <option value={Incase.two.case}>{Incase.two.case * Incase.two.price}₮</option>
                          <option value={Incase.two.case}>{Incase.three.case * Incase.three.price}₮</option>
                      </select>
                      <div className='selectTotal'>
                        <p className='total pt-3 text-red-700'>₮</p>
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

                      <Link className='nav-link' to="/order" id='submit'>
                          <img src={button} alt="" className='buttonImg' />
                      </Link>
                      {/* <button type='submit' >button</button> */}
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
                  <NavLink className={isActive => isActive ? "active" : "nav-link"} to="/">
                    Бүтээгдэхүүний тайлбар
                  </NavLink>
                  <NavLink className={isActive => isActive ? "active" : "nav-link"} to="/instruction">
                    Хадгалах заавар
                  </NavLink>
                  <NavLink className={isActive => isActive ? "active" : "nav-link"} to="/nutrition">
                    Тэжээллэг чанар
                  </NavLink>
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
