import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import orderinfo from "../../images/svg/order 2/Header.svg";
import sags from "../../images/svg/order 2/Group 550.svg";
import insta from "../../images/svg/home/Instagram.svg";
import dans from '../../images/svg/order 3/Header-1.svg';
import instruction from '../../images/svg/order 3/Header-2.svg';
import khan from '../../images/khan.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SlideImage from "../SlideImage";
import Social from "../Social";

export default function Payment() {

  const { render, setRender } = useState(false);

  const arrays = sessionStorage.getItem("array");
  const orderArray = JSON.parse(arrays);
  const sum = sessionStorage.getItem("sum");
  const userarrays = sessionStorage.getItem("userArray");
  const userArray = JSON.parse(userarrays);
  console.log(userArray)

  function CancelOrder() {

    toast("Захиалга цуцлагдлаа!")
    setTimeout(() => {
      sessionStorage.clear();
      window.location.pathname = '/';
    }, 2000)

    setRender(!render)
  }

  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center relative choosing orderInfo">
          <SlideImage />
        </div>

        <div className="order2Content w-full lg:w-1/2 flex flex-col justify-between mr-10">
          <div className="orderInfo flex flex-col justify-between">
            <h1 className="mb-3 9xl:text-7xl">Төлбөр төлөх</h1>

            {/* Захиалгын мэдээлэл*/}
            <div className="order2Info">
              <div className="flex productInfo justify-between">
                <img src={orderinfo} alt="" className="userImg mb-3" />
                <img src={sags} alt="" className="flowerImg" />
              </div>
              <div className="order2TotalInfo">
                <div className="seeTotalInfo flex relative">
                  <div className='order1selectTotal flex justify-center items-center'>
                    <div className="min-w-0 flex mx-2">
                      {orderArray.map(data =>
                        <p className='total text-xl font-semibold'>{data.size}</p>
                      )}
                    </div>
                  </div>
                  <div className='order1selectTotal1 flex items-center justify-center'>
                    <div className="min-w-0 flex mx-2">
                      {orderArray.map(data =>
                        <p className='total text-xl font-semibold mr-2'>{data.incase}x{data.avdar}</p>
                      )}
                    </div>
                  </div>
                  <div className='order1selectTotal2'>
                    <p className='total pt-3 text-red-700 text-3xl font-semibold'>{sum}₮</p>
                  </div>
                  <div className='order2tablenames absolute flex flex-col md:flex-row text-xs 9xl:text-3xl'>
                    <div className='flex'>
                      <p className=''>Хэмжээ</p>
                    </div>
                    <div className='flex'>
                      <p className=''>Багц</p>
                    </div>
                    <div className='flex'>
                      <p className=''>Нийт үнэ</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Хэрэглэгчийн мэдээлэл */}
            <div className="userInfo">
              <div className="flex w-full justify-between my-3">
                {/* <p className="userImg">ДАНС эсвэл QR код</p> */}
                <img src={dans} alt="" className="userImg" />
                <img src={sags} alt="" className="flowerImg" />
              </div>
              <form className="flex flex-wrap text-sm 9xl:text-4xl">
                <div className="groupPay w-full">
                  <label htmlFor="">Банк сонгох</label>
                  <select name="" id="" className='select w-full'>
                    <option value="haan">
                      <img src={khan} alt="" width={20} />
                      Хаан</option>
                    <option value="tdb">Худалдаа хөгжил</option>
                    <option value="golomt">Голомт</option>
                  </select>
                </div>

                {/* Байршлын мэдээлэл */}
                <div className="locationInfo">
                  <div className="userInfo w-full">
                    <div className="flex w-full justify-between my-3">
                      {/* <p className="payP">Төлбөр төлөх заавар</p> */}
                      <img src={instruction} alt="" className="userImg" />
                      <img src={sags} alt="" className="flowerImg" />
                    </div>
                    <div className="9xl:mb-2 flex w-full justify-around">
                      <p className="text-lg 9xl:text-4xl text-gray-900">Дансаар шилжүүлэх</p>
                      <p className="text-lg 9xl:text-4xl text-gray-900">QR код уншуулах</p>
                    </div>
                    <div className="flex justify-around instructionPayment">

                      <div className="paymentInstruction flex flex-col justify-center w-1/2">

                        <div className="dansMedeelel flex">
                          <div className="mr-5 9xl:text-2xl">
                            <p>Хүлээн авагч</p>
                            <p>Хаан банк</p>
                            <p>Гүйлгээний утга</p>
                          </div>
                          <div className="ml-5">
                            <p>КОКА-КОЛА ХХК</p>
                            <p>5011 395 477</p>
                            <p>R247468743</p>
                          </div>
                        </div>
                      </div>

                      <div className="qrCode flex flex-col justify-center items-center">

                        <img src={insta} alt="" className="w-full" />
                      </div>

                    </div>

                    <div className="warning 9xl:mt-48">
                      <p className="font-semibold 9xl:text-4xl">Төлбөр төлөгдсөний дараа таны захиалга идэвхжихийг анхаарна уу! Төлбөрийг дээрх дансанд шилжүүлэх ба захиалгын R247468743 дугаарыг гүйлгээний утга дээр бичнэ үү.</p>
                    </div>

                    <div className="flex w-full">
                      <div className="back w-1/2">
                        <a className="backButton" href="/orderToPayment">
                          Буцах
                        </a>
                      </div>

                      <div className="removeOrder w-1/2">
                        <Link className="nav-link" to="#">
                          <button className="removeOrderButton text-white 9xl:text-5xl" onClick={CancelOrder}>
                            <ToastContainer />
                            Захиалга цуцлах
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>


              </form>
            </div>
          </div>

        </div>
        <Social />
      </div>
    </div>
  );
}
