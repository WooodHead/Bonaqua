import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import sags from "../../images/svg/order 1/sagsnii medelel.svg";
import insta from "../../images/svg/home/Instagram.svg";
import fb from "../../images/svg/home/Facebook.svg";
import twitter from "../../images/svg/home/Twitter.svg";
import button from '../../images/svg/home/Button.svg';
import add from '../../images/svg/order 1/nemelt zahialga.svg';
import addOrder from '../../images/svg/order 1/zahialga nemeh.svg';
import addTable from '../../images/svg/order 1/zahialah husnegt.svg';
import order from '../../images/svg/order 1/zahialah.svg';
import bona from '../../images/bona0.5.png';
import addButton from '../../images/svg/order 1/+.svg';
import removeButton from '../../images/svg/order 1/-.svg';
import deleteButton from '../../images/svg/order 1/x.svg';
import { AppContext } from "../../App";


export default function Order() {

  const { value, setValues } = useContext(AppContext);

  window.addEventListener('load', () => {
    const size = sessionStorage.getItem('SIZE');
    const incase = sessionStorage.getItem('INCASE');

    document.getElementById('resultO').innerHTML = `${size * incase}₮`;
  });

  const [count, setCount] = useState(1); 

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => 
          prevCount - 1);
    }
  };
  const increment = () =>{
      setCount((prevCount) => prevCount + 1);
  } 

  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex">
        <div className="w-1/2 flex items-center relative choosing">
          <div className="slideContent choosing flex items-center">
            <div
              id="carouselExampleCaptions"
              className="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                    className="block w-full"
                    alt="..."
                  />
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    className="block w-full"
                    alt="..."
                  />
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    className="block w-full"
                    alt="..."
                  />
                </div>
                <div className="carousel-indicators absolute flex justify-center">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order1Content w-1/2 flex flex-col justify-between">
          <div className="orderInfo flex flex-col justify-between">
            <h1 className="mb-4 9xl:text-8xl">Миний сагс</h1>
            <div className="flex productInfo">
              <img src={sags} alt="" className="w-full" />
            </div>
            {/* Zahialsan heseg */}
            <div className="zahialga flex flex-wrap justify-between">
              <div className="zahialsanHeseg" >
                <div className="order1 flex">
                  <div className="order1Img flex justify-center">
                    <img src={bona} alt="" className="" />
                  </div>
                  <div className="order1Info p-2">
                    <div className="orderName">
                      <div className="flex justify-between w-full">
                        <h6 className="9xl:text-4xl">Bonaqua 500мл</h6>
                        <img src={deleteButton} alt="" className="cursor-pointer" />
                      </div>
                      <p className="text-sm 9xl:text-2xl">Ширхэгийн тоо: 12 ширхэг</p>
                    </div>

                    <div className="order1Price flex justify-between items-center">
                      <h3 className="9xl:text-5xl">{value}</h3>
                      <div className="order1Button flex justify-between">
                        <button className="" onClick={decrement}>
                          <img src={removeButton} alt="" />
                        </button>
                        <p className="font-semibold 9xl:text-5xl">{count}</p>
                        <button onClick={increment}>
                          <img src={addButton} alt="" />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex zahialahHusnegt">

              <div className="seeTotalInfo flex relative">
                <div className='order1selectTotal'>
                  <p className='text-gray-500 flex ml-3 text-sm 9xl:text-2xl'>Хэмжээ</p>
                  <p className='total text-xl font-semibold'>500ml, 800ml, 1.25l</p>
                </div>

                <div className='order1selectTotal1 flex flex-col'>
                  <p className='text-gray-500 flex ml-3 text-sm 9xl:text-2xl'>Нийт үнэ</p>
                  <p className='total text-red-700 text-3xl font-semibold' id="resultO">{value}</p>
                  
                </div>
                
                {/* <div className='order1tablenames absolute flex text-xs mt-1 w-1/2'>
                  <div className='flex'>
                    <p className=''>Хэмжээ</p>
                  </div>
                  <div className='flex'>
                    <p className=''>Нийт үнэ</p>
                  </div>
                </div> */}

           
                <Link className="nav-link cursor-pointer" to="/orderToPayment" id='submit'>
                    <button className="sagslahButton text-2xl 9xl:text-5xl">
                      Захиалах
                    </button>
                </Link>
           
               
              </div>
             
            </div>

          </div>
          
          <div className="addOrder">
            <div className='flex flex-col busketButton'>
              <div className="addOrdertitle my-3">
                <img src={add} alt="" className="w-full" />
              </div>
         
              <div className='flex'>

                <form action="" id="mlform" className='flex relative flex-col md:flex-row'>
                  <select name="ml" id="mlselect" className='select'>
                  
                  
                  </select>
                  <select name="avdar" id="avdar" className='select'>
                    <option value="">₮</option>
                    <option value="">₮</option>
                    <option value="">₮</option>
                  </select>
                  <div className='selectTotal'>
                    <p className='total pt-3 text-red-700'>₮</p>
                  </div>
                  <div className='tablenames absolute flex flex-col md:flex-row text-xs 9xl:text-2xl mt-1'>
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

                  <Link className="nav-link" to="/order" id='submit'>
                    <button className="sagslahButton text-xl 9xl:text-4xl">
                      Захиалга нэмэх
                    </button>
                  </Link>

                </form>

              </div>
            </div>
            <p className="font-semibold flex justify-end">Захиалгын доод хэмжээ: 100,000₮</p>
          </div>
        </div>

        <div className="social flex flex-col justify-center items-center">
          <img src={insta} alt="" className="sc" />
          <img src={fb} alt="" className="sc" />
          <img src={twitter} alt="" className="sc" />
        </div>
      </div>
    </div>
  );
}
