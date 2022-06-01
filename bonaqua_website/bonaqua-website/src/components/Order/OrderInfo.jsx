import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import orderinfo from "../../images/svg/order 2/Header.svg";
import user from "../../images/svg/order 2/Header-2.svg";
import location from "../../images/svg/order 2/Header-1.svg";
import sags from "../../images/svg/order 2/Group 550.svg";
import insta from "../../images/svg/home/Instagram.svg";
import fb from "../../images/svg/home/Facebook.svg";
import twitter from "../../images/svg/home/Twitter.svg";
import { AppContext } from "../../App";

export default function OrderInfo() {
  const randomON = 12;
  function getUserData() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const district = document.getElementById("district").value;
    const committee = document.getElementById("committee").value;
    const apartment = document.getElementById("apartment").value;
    const entrance = document.getElementById("entrance").value;
    const entrancecode = document.getElementById("entrancecode").value;
    const doornumber = document.getElementById("doornumber").value;
    const addinginfo = document.getElementById("addinginfo").value;

    console.log(name, number, district, committee, apartment, entrance, entrancecode, doornumber, addinginfo)
  }

  const { value, array, setPrice, price, setTotal, total } = useContext(AppContext);

  const arrays = sessionStorage.getItem("array");
  const orderArray = JSON.parse(arrays);
  const sum = sessionStorage.getItem("sum");

  // const getUserInfo = (e) => {
  //   e.preventDefault();

  //   fetch('http://localhost:8080/api/bonaqua', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: e.target[0].value
  //     })
  //   })
  //   .then((res) => {
  //     res.json()
  //   })
  //   .then((data) => setUserInfo(data))
  // }

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

        <div className=" w-1/2 flex flex-col justify-between mr-10">
          <div className="orderInfo flex flex-col justify-between">
            <h1 className="mb-3 9xl:text-7xl">Захиалгын мэдээлэл</h1>

            {/* Захиалгын мэдээлэл*/}
            <div className="">
              <div className="flex justify-between">
                <img src={orderinfo} alt="" className="userImg mb-3" />
                <img src={sags} alt="" className="flowerImg" />
              </div>
              <div className="order2TotalInfo">
                <div className="seeTotalInfo flex relative">
                  <div className='order1selectTotal flex justify-center items-center overflow-scroll'>
                    <div className="min-w-0 flex mx-2">
                    {orderArray.map(data => 
                      <p className='total text-xl font-semibold'>{data.size}</p>
                    )}
                    </div>
                  </div>
                  <div className='order1selectTotal1'>
                  <div className="min-w-0 flex mx-2">
                    {orderArray.map(data =>
                      <p className='total text-xl flex justify-center items-center font-semibold mr-2'>{data.incase}x{data.incase * data.avdar}</p>
                    )}
                    </div>
                  </div>
                  <div className='order1selectTotal2'>
                    <p className='total pt-3 text-red-700 text-3xl font-semibold'>{sum}₮</p>
                  </div>
                  <div className='order2tablenames absolute flex flex-col md:flex-row text-xs 9xl:text-3xl'>
                    <div className='flex p'>
                      <p className=''>Хэмжээ</p>
                    </div>
                    <div className='flex p'>
                      <p className=''>Багц</p>
                    </div>
                    <div className='flex p'>
                      <p className=''>Нийт үнэ</p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>

            {/* Хэрэглэгчийн мэдээлэл */}
            <div className="userInfo w-full">
              <div className="flex w-full justify-between my-3">
                <img src={user} alt="" className="userImg" />
                <img src={sags} alt="" className="flowerImg" />
              </div>
              <div className="">
                <form className="flex justify-between text-sm 9xl:text-3xl" id="userform">
                  <div class="group mr-1">
                    <label>Нэр</label>
                    <input type="text" id="name"/>
                  </div>
                  <div class="group mr-1">
                    <label>Утасны дугаар</label>
                    <input type="number" id="number"/>
                  </div>
                  <div class="group">
                    <label>Захиалгын дугаар</label>
                    <input type="text" id="ordernumber" disabled="disabled" className="randomOrderNumber cursor-not-allowed" placeholder={randomON}/>
                  </div>
                </form>
              </div>
            </div>

            {/* Байршлын мэдээлэл */}
            <div className="locationInfo w-full">
              <div className="userInfo w-full">
                <div className="flex w-full justify-between my-3">
                  <img src={location} alt="" className="userImg" />
                  <img src={sags} alt="" className="flowerImg" />
                </div>
                <div className="locate flex justify-between w-full">
                  <form className="flex justify-between flex-wrap text-sm 9xl:text-3xl">
                    <div className="flex district justify-between">
                      <div className="groupS mr-3 w-1/2">
                        <label htmlFor="">Дүүрэг</label>
                        <select name="" id="district" className='select w-full'>
                          <option value="330" className='option'></option>
                          <option value="500">Баянгол</option>
                          <option value="800">Баянзүрх</option>
                          <option value="1.5">Хан-Уул</option>
                        </select>
                      </div>
                      <div className="groupS w-1/2">
                        <label htmlFor="">Хороо</label>
                        <select name="" id="committee" className='select w-full'>
                          <option value="330" className='option'></option>
                          <option value="500">1-р хороо</option>
                          <option value="800">2-р хороо</option>
                          <option value="1.5">3-р хороо</option>
                        </select>
                      </div>
                    </div>


                    <div className="flex house">
                      <div class="groupL mr-3 w-1/2">
                        <label>Байр</label>
                        <input type="text" className="w-full" id="apartment"/>
                      </div>
                      <div class="groupL w-1/2">
                        <label>Орц</label>
                        <input type="text" className="w-full" id="entrance"/>
                      </div>
                    </div>
                    <div className="flex door">
                      <div class="groupL mr-3 w-1/2">
                        <label>Орцны код</label>
                        <input type="text" className="w-full" id="entrancecode"/>
                      </div>
                      <div class="groupL w-1/2">
                        <label>Хаалганы дугаар /тоот/</label>
                        <input type="text" className="w-full" id="doornumber"/>
                      </div>
                    </div>

                    <div class="groupLa w-full">
                      <label>Нэмэлт мэдээлэл</label>
                      <input type="text" className="w-full" id="addinginfo"/>
                    </div>
                    <div className="flex w-full">
                      <div className="back w-1/2">
                        <a className="backButton" href="/order">
                          Буцах
                        </a>
                      </div>

                      <div className="choosePayment w-1/2">
                        <Link className="nav-link" to="/payment">
                          <button className="choosePaymentButton" onClick={getUserData}>
                            Төлбөрийн нөхцөл сонгох
                          </button>
                        </Link>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
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
