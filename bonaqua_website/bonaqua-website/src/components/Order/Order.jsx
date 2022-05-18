import React from "react";
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

export default function Order() {
  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex">
        <div className="w-1/2 flex items-center relative choosing">
          <div className="slideContent choosing flex">
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
            <h1 className="mb-4">Миний сагс</h1>
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
                  <div className="order1Info">
                    <div className="orderName">
                      <div className="flex justify-between w-full">
                        <h6>Bonaqua 500мл</h6>
                        <img src={deleteButton} alt="" className="cursor-pointer" />
                      </div>
                      <p className="text-sm">Ширхэгийн тоо: 12 ширхэг</p>
                    </div>

                    <div className="order1Price flex justify-between items-center">
                      <h3>16.080₮</h3>
                      <div className="order1Button flex justify-between">
                        <button>
                          <img src={removeButton} alt="" />
                        </button>
                        <p className="font-semibold">2</p>
                        <button>
                          <img src={addButton} alt="" />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


            </div>



            <div className="flex zahialahHusnegt">
              <div className="seeTotalInfo flex">
                <div className='order1selectTotal'>
                  <p className='total pt-3 text-xl font-semibold'>500ml, 800ml, 1.25l</p>
                </div>
                <div className='order1selectTotal1'>
                  <p className='total pt-2 text-red-700 text-3xl font-semibold'>24.600₮</p>
                </div>
                <div>
                <Link className="nav-link" to="/orderToPayment">
                {/* <img src={order} alt="" className="zahialahButton" /> */}
                <button className="order1zahialahButton">
                  Захиалах
                </button>
                </Link>
                </div>
                <div className='order1tablenames absolute flex justify-between text-xs mt-2'>
                  <div className='tablename4'>
                    <p className=''>Хэмжээ</p>
                  </div>
                  <div className='tablename5'>
                    <p className=''>Нийт үнэ</p>
                  </div>
                </div>
              </div>
             
            </div>

          </div>
          <div className="addOrder">
            <div className='flex flex-col busketButton'>
              <div className="addOrdertitle my-3">
                <img src={add} alt="" className="w-full" />
              </div>
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
                  <img src={addOrder} alt="" className='buttonImg' />
                </Link>
              </form>

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
