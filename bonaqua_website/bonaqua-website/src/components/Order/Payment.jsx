import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import orderinfo from "../../images/svg/order 2/Header.svg";
import sags from "../../images/svg/order 2/Group 550.svg";
import insta from "../../images/svg/home/Instagram.svg";
import fb from "../../images/svg/home/Facebook.svg";
import twitter from "../../images/svg/home/Twitter.svg";
import table from '../../images/svg/order 2/Group 569.svg';
import line from '../../images/svg/order 3/Line 4.svg';
import dans from '../../images/svg/order 3/Header-1.svg';
import instruction from '../../images/svg/order 3/Header-2.svg';
import khan from '../../images/khan.png';

export default function Payment() {
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

        <div className="order2Content w-1/2 flex flex-col justify-between mr-10">
          <div className="orderInfo flex flex-col justify-between">
            <h1 className="mb-3 9xl:text-7xl">Төлбөр төлөх</h1>

            {/* Захиалгын мэдээлэл*/}
            <div className="order2Info">
              <div className="flex productInfo justify-between">
                <img src={orderinfo} alt="" className="userImg mb-3" />
                <img src={sags} alt="" className="w-full" />
              </div>
              <div className="order2TotalInfo">
                <div className="seeTotalInfo flex relative">
                  <div className='order1selectTotal'>
                    <p className='total pt-3 text-xl font-semibold'>500ml, 800ml, 1.25l</p>
                  </div>
                  <div className='order1selectTotal1'>
                    <p className='total pt-3 text-xl font-semibold'>500ml, 800ml, 1.25l</p>
                  </div>
                  <div className='order1selectTotal2'>
                    <p className='total pt-3 text-red-700 text-3xl font-semibold'>249.600₮</p>
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
                <img src={dans} alt="" />
                <img src={sags} alt="" className="w-full" />
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
                      <img src={instruction} alt="" className="" />
                      <img src={sags} alt="" className="w-full" />
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

                        <img src={insta} alt="" className="w-full"  />
                      </div>

                    </div>

                    <div className="warning">
                      <p className="font-semibold 9xl:text-3xl">Төлбөр төлөгдсөний дараа таны захиалга идэвхжихийг анхаарна уу! Төлбөрийг дээрх дансанд шилжүүлэх ба захиалгын R247468743 дугаарыг гүйлгээний утга дээр бичнэ үү.</p>
                    </div>

                    <div className="flex w-full">
                      <div className="back w-1/2">
                        <a className="backButton" href="/orderToPayment">
                          Буцах
                        </a>
                      </div>

                      <div className="removeOrder w-1/2">
                        <Link className="nav-link" to="/">
                          <button className="removeOrderButton text-white 9xl:text-5xl">
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

        <div className="social flex flex-col justify-center items-center">
          <img src={insta} alt="" className="sc" />
          <img src={fb} alt="" className="sc" />
          <img src={twitter} alt="" className="sc" />
        </div>
      </div>
    </div>
  );
}
