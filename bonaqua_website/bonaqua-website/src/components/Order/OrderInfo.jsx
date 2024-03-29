import React, { useContext, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import orderinfo from "../../images/svg/order 2/Header.svg";
import user from "../../images/svg/order 2/Header-2.svg";
import location from "../../images/svg/order 2/Header-1.svg";
import sags from "../../images/svg/order 2/Group 550.svg";
import { AppContext } from "../../App";
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SlideImage from "../SlideImage";
import Social from "../Social";
import { useHistory } from "react-router-dom";

export default function OrderInfo() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [committee, setCommittee] = useState("");
  const [apartment, setApartment] = useState("");
  const [entrance, setEntrance] = useState("");
  const [code, setCode] = useState("");
  const [doornumber, setDoorNumber] = useState("");
  const [add, setAdd] = useState("");
  const [data, setData] = useState([]);
  const { setRandom, random, pack, orderid, setOrderid, size, incase } = useContext(AppContext)
  const history = useHistory();

  const arrays = sessionStorage.getItem("array");
  const orderArray = JSON.parse(arrays);
  const sum = sessionStorage.getItem("sum");

  function getUserData() {

    // if (name == '' || number == '' || district == '' || committee == '' || apartment == '' || doornumber == '' || addinginfo == '') {
    //   toast("Шаардлагатай талбаруудыг бөглөнө үү!");
    //   window.location.pathname
    // }
    // else {
    //   var phoneno = /^[7-9]\d{7}$/;
    //   var regName = /^[a-zA-Z ]{2,30}$/;
         var today = new Date();
    //   if (number.match(phoneno) && name.match(regName)) {

        fetch('http://192.168.244.6:8089/api/bonaqua/addOrder', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            description: [`ner: ${name}, duureg: ${district}, horoo: ${committee}, 
                         bair/gudamj: ${apartment}, orts: ${entrance}, ortsnii kod: ${code},
                         haalganii dugaar: ${doornumber}, nemelt: ${add}`].join(","),
            phone: number,
            array: orderArray,
            pricedisc: 0,
        
          })
        })
          .then((res) => {
            const data = res.json();
            data.then(ordernumber => {
              const orderNumber = ordernumber[0].OrderNumber;
              const orderId = ordernumber[0].OrderID;
              setRandom(orderNumber);
              setOrderid(orderId);
              sessionStorage.setItem("random", orderNumber);
              sessionStorage.setItem("orderid", orderId);
            });
          })

          // history.push('/payment');
          window.location.pathname = '/payment'
      // }
      // else {
      //   toast("Та нэр эсвэл утасны дугаараа шалгана уу!");
      // }
    // }
  }

  const horoo = Array(32).fill(0).map((e, i) => i + 1);

  orderArray.forEach(x => {
    pack.push(x.size)
    incase.push(x.incase)
    size.push(x.avdar)
  });

  var options = "<option value=''></option>";
  function Options() {
    for (let i = 1; i < 33; i++) {
      options += "<option value='" + i + "'>" + i + "-р хороо</option>";
    }
    document.getElementById('committee').innerHTML = options;
  }

  window.onload = (event) => {
    Options();
  };

  useEffect(() => {
    var getData = async () => {
      try {
        var data = await fetch('http://192.168.244.6:8089/api/bonaqua/orderHistory');
        var resData = await data.json();
        setData(resData)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2 flex items-center justify-center relative choosing orderInfo">
          <SlideImage />
        </div>

        <div className="w-full xl:w-1/2 flex flex-col justify-between mr-10">
          <div className="orderInfo flex flex-col justify-between">
            <h1 className="mb-3 9xl:text-7xl">Захиалгын мэдээлэл</h1>

            {/* Захиалгын мэдээлэл*/}
            {/* <div className="">
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
                  <div className='order1selectTotal1 flex justify-center items-center overflow-scroll'>
                    <div className="min-w-0 flex mx-2 items-center">
                      {orderArray.map(data =>
                        <p className='total text-xl flex justify-center items-center font-semibold mr-2'>{data.incase}x{data.avdar}</p>
                      )}
                    </div>
                  </div>
                  <div className='order1selectTotal2'>
                    <p className='total pt-3 text-red-700 text-3xl font-semibold'>{sum}₮</p>
                  </div>
                  <div className='order2tablenames absolute flex flex-row text-xs 9xl:text-3xl'>
                    <div className='flex sizecomment'>
                      <p className=''>Хэмжээ</p>
                          {
                            orderArray.map(data =>
                              <span className="sizetext">{data.size}</span>
                            )
                          }
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
            </div> */}

            <div className="">
              <div className="flex justify-between">
                <img src={orderinfo} alt="" className="userImg mb-3" />
                <img src={sags} alt="" className="flowerImg" />
              </div>
              <div className="order2TotalInfo">
                <div className="seeTotalInfo flex relative">
                  <div className='order1selectTotal flex justify-center items-center overflow-scroll'>
                    <div className="flex mx-2 w-full flex-column mt-3">
                      {orderArray.map((data, i) =>
                        <p className='total font-semibold'>
                          {`${pack[i]} - ${size[i]} авдар (${incase[i] * size[i]}ш),`}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* <div className='order1selectTotal1 flex justify-center items-center overflow-scroll'>
                    <div className="min-w-0 flex mx-2 items-center">
                      {orderArray.map(data =>
                        <p className='total text-xl flex justify-center items-center font-semibold mr-2'>{data.incase}x{data.avdar}</p>
                      )}
                    </div>
                  </div> */}
                  <div className='order1selectTotal2'>
                    <p className='total pt-3 text-red-700 text-3xl font-semibold'>{sum}₮</p>
                  </div>
                  <div className='order2tablenames absolute flex flex-row text-xs 9xl:text-3xl'>
                    <div className='flex'>
                      <p className=''>Хэмжээ/Тоо ширхэг</p>
                    </div>

                    <div className='flex'>
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
                    <label className="form-label">Нэр</label>
                    <input type="text" id="name" className="check" onChange={(e) => setName(e.target.value)} required="required" />
                  </div>
                  <div class="group mr-1">
                    <label className="form-label">Утасны дугаар</label>
                    <input type="text" id="number" className="check"
                      onChange={(e) => {
                        setNumber(e.target.value);
                        var dugaar = [];
                        data.forEach(x => {
                          dugaar.push(x.phonenumber)
                        })

                        // if (dugaar.includes(e.target.value)) {
                        //   console.log("yes")

                        //   var proceed = confirm("Та өмнөх захиалгын хаягаа ашиглах уу?");
                        //   if (proceed) {
                        //     for (let i = 0; i < data.length; i++) {
                        //       if (data[i].phonenumber == e.target.value) {
                        //         document.getElementById("apartment").placeholder = data[i].orderno;
                        //       }
                        //     }
                        //   } else {
                        //     document.getElementById("apartment").placeholder = ""
                        //   }
                        // }

                      }}
                      required="required" />
                  </div>
                  <div class="group">
                    <label>Захиалгын дугаар</label>
                    {random == '' ? <input type="text" id="ordernumber" disabled="disabled" className="cursor-not-allowed" placeholder="Автоматаар үүснэ" />
                      : <input type="text" id="ordernumber" disabled="disabled" className="randomOrderNumber cursor-not-allowed" placeholder="" />}
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
                  <form className="flex justify-between flex-wrap text-sm 9xl:text-3xl" id="orderInfo">
                    <div className="flex district justify-between">
                      <div className="groupS mr-3 w-1/2">
                        <label htmlFor="" className="form-label">Дүүрэг</label>
                        <select name="" id="district" className='select w-full 9xl:text-4xl check' onChange={(e) => setDistrict(e.target.value)} required="required">
                          <option value="" className='option'></option>
                          <option value="Bayangol">Баянгол</option>
                          <option value="Bayanzurh">Баянзүрх</option>
                          <option value="Han-Uul">Хан-Уул</option>
                          <option value="Songino-Hairhan">Сонгино-Хайрхан</option>
                          <option value="Chingeltei">Чингэлтэй</option>
                          <option value="Suhbaatar">Сүхбаатар</option>
                          <option value="Nalaih">Налайх</option>
                          <option value="Baganuur">Багануур</option>
                          <option value="Bagahangai">Багахангай</option>
                        </select>
                      </div>
                      <div className="groupS w-1/2">
                        <label htmlFor="" className="form-label">Хороо</label>
                        <select name="" id="committee" className='select w-full 9xl:text-4xl check' onChange={(e) => setCommittee(e.target.value)} required="required">
                          {/* { 
                            horoo.map(horoo =>
                              options += <option value={horoo}>{horoo}-р хороо</option>
                            )
                          } */}
                        </select>
                      </div>
                    </div>

                    <div className="flex house">
                      <div class="groupL mr-3 w-1/2">
                        <label className="form-label">Байр/Гудамж</label>
                        <input type="text" className="w-full check" id="apartment" onChange={(e) => setApartment(e.target.value)} required="required" />
                      </div>
                      <div class="groupL w-1/2">
                        <label className="form-label">Орц</label>
                        <input type="text" className="w-full check" id="entrance" onChange={(e) => setEntrance(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex door">
                      <div class="groupL mr-3 w-1/2">
                        <label className="form-label">Орцны код</label>
                        <input type="text" className="w-full check" id="entrancecode" onChange={(e) => setCode(e.target.value)} />
                      </div>
                      <div class="groupL w-1/2">
                        <label className="form-label">Хаалганы дугаар /тоот/</label>
                        <input type="text" className="w-full check" id="doornumber" onChange={(e) => setDoorNumber(e.target.value)} required="required" />
                      </div>
                    </div>

                    <div class="groupLa w-full">
                      <label className="form-label">Нэмэлт мэдээлэл</label>
                      <input type="text" className="w-full check" id="addinginfo" placeholder="Дэлгэрэнгүй хаяг" onChange={(e) => setAdd(e.target.value)} required="required" />
                    </div>
                    <div className="flex w-full">
                      <div className="back w-1/2">
                        <a className="backButton" href="/order">
                          Буцах
                        </a>
                      </div>

                      <div className="choosePayment w-1/2">
                        <Link className="nav-link" to="#">
                          <ToastContainer />
                          <button className="choosePaymentButton hover:font-semibold" onClick={getUserData} type="submit">
                            Баталгаажуулах
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
        <Social />
      </div>
      {/* <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex w-100 flex justify-center items-center" >
            <h2 className="my-2">Захиалгын дугаар</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="was-validated d-flex flex-column" id="" onSubmit="">
            <div className="row p-4">
              <p className='text-gray-500'>Таны захиалгын дугаар: <span className="ordernumber font-semibold text-2xl"> {random} </span>.
                Та захиалгын дугаараа гүйлгээний утга дээрээ бичих тул тэмдэглэж авна уу! <span> Төлбөр төлөгдсөний дараа захиалга баталгаажина.</span> <br />
                <span className="text-black font-semibold">Захиалгын дугаараар захиалга идэвхжихийг анхаарна уу!</span></p>
            </div>
            <Button type="submit" className="w-50 mx-auto continueButton" onClick={Continue} href="/payment">
              Үргэлжлүүлэх
            </Button>
          </form>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}
