import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import sags from "../../images/svg/order 1/sagsnii medelel.svg";
import insta from "../../images/svg/home/Instagram.svg";
import fb from "../../images/svg/home/Facebook.svg";
import twitter from "../../images/svg/home/Twitter.svg";
import add from '../../images/svg/order 1/nemelt zahialga.svg';
import bona from '../../images/bona0.5.png';
import addButton from '../../images/svg/order 1/+.svg';
import removeButton from '../../images/svg/order 1/-.svg';
import deleteButton from '../../images/svg/order 1/x.svg';
import { AppContext } from "../../App";
import { Modal, Button } from 'react-bootstrap';

export default function Order() {
  const [data, setData] = useState([]);
  const [cases, setCase] = useState();
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);

  const { value, array, setPrice, price, setTotal, total, count, setCount } = useContext(AppContext);

  // Баазаас мэдээлэл авах
  useEffect(() => {
    var getData = async () => {
      try {
        var data = await fetch('http://localhost:8080/api/bonaqua');
        var resData = await data.json();
        setData(resData)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [render])

  const number = Array(10).fill(0).map((e, i) => i + 1);
  console.log(count)
  // Захиалгын мэдээлэл
  const arrays = sessionStorage.getItem("array");
  var orderArray = JSON.parse(arrays);
  let sum = sessionStorage.getItem("sum");

  window.onload = () => {
    const p = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const n = document.getElementById('avdar').value;
    const result = document.getElementById('result');


    result.innerHTML = `${p * incase * n}₮`;
  }

  function decrement() {
  const c = document.getElementById("count");
  orderArray.forEach(x => {
    if( x.avdar > 1) {
      x.avdar -= 1;
      console.log(x.avdar)
      sessionStorage.setItem("array", JSON.stringify(orderArray));
    }
  });
  };

  function increment() {
    orderArray.forEach(x => {
      x.avdar += 1;
      sessionStorage.setItem("array", JSON.stringify(orderArray));
      setRender(true)
    })
  }

  // Нэмэлт захиалгын хэсэг /утга авах/
  function setValue() {
    const size = document.getElementById('mlselect').value.split(',')[0];
    const price = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const number = document.getElementById('avdar').value;
    const result = document.getElementById('result');

    const totals = (incase * price) * number;
    sessionStorage.setItem('total', totals);
    setPrice(totals);
    result.innerHTML = `${totals}₮`;
  }

  // Захиалга нэмэх
  function Busket() {
    const size = document.getElementById('mlselect').value.split(',')[0];
    const prices = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];

    const bagts = parseInt(document.getElementById('avdar').value);

    var index = orderArray.findIndex(x => x.size == size);

    index === -1 ? orderArray.push({
      size: size,
      price: prices * incase * bagts,
      tincase: incase * bagts,
      incase: incase,
      avdar: bagts
    })
      : orderArray.forEach(e => {
        if (e.size == size) {
          e.price += (prices * incase) * bagts;
          e.tincase += (incase * bagts);
          e.avdar += bagts;
        }
      })

    sessionStorage.setItem("array", JSON.stringify(orderArray));
    var sum = 0;
    orderArray.forEach(x => {
      sum += x.price;
    });
    sessionStorage.setItem("sum", sum);
    setTotal(sum)
  }

  // Захиалгын доод хэмжээ шалгах
  function Ordering() {
    if (sum < 100000) {
      setShow(true);
    }
    else {
      window.location.pathname = '/orderToPayment';
    }
  }

  const handleClose = () => setShow(false);

  // Захиалга устгах
  function removeOrder(element) {
    const index = orderArray.indexOf(element);

    if (index > -1) {
      orderArray.splice(index, 1);
      sessionStorage.setItem("array", JSON.stringify(orderArray));
      setRender(true)
      sum -= element.price;
      sessionStorage.setItem("sum", sum);
      setTotal(sum)
    }
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
                    className="block w-full" alt="..."
                  />
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                    className="block w-full" alt="..."
                  />
                </div>
                <div className="carousel-item relative float-left w-full">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                    className="block w-full" alt="..."
                  />
                </div>
                <div className="carousel-indicators absolute flex justify-center">
                  <button type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                    className="active"
                    aria-current="true" aria-label="Slide 1">
                  </button>
                  <button type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2">
                  </button>
                  <button type="button"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3">
                  </button>
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
            {/* Захиалгын хэсэг */}
            <div className="zahialga flex flex-wrap justify-between">
              {orderArray.map(data =>
                <div className="zahialsanHeseg my-1" >

                  <div className="order1 flex">
                    <div className="order1Img flex justify-center">
                      <img src={bona} alt="" className="" />
                    </div>

                    <div className="order1Info p-2">
                      <div className="orderName">
                        <div className="flex justify-between w-full">
                          <h6 className="9xl:text-4xl">Bonaqua {data.size} </h6>
                          <img src={deleteButton} onClick={() => removeOrder(data)} id="remove" alt="" className="cursor-pointer" />
                        </div>
                        <p className="text-sm 9xl:text-2xl">Ширхэгийн тоо: {data.tincase} ширхэг</p>
                      </div>

                      <div className="order1Price flex justify-between items-center">
                        <h3 className="9xl:text-5xl">{data.price}₮ </h3>
                        <div className="order1Button flex justify-between">
                          <button className="" onClick={decrement}>
                            <img src={removeButton} alt="" />
                          </button>
                          <p className="font-semibold 9xl:text-5xl" id="count" value={data.avdar}>{data.avdar}</p>
                          <button onClick={increment}>
                            <img src={addButton} alt="" />
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex zahialahHusnegt">
              <div className="seeTotalInfo flex relative">
                <div className='order1selectTotal flex flex-col'>
                  <p className='text-gray-500 flex ml-3 text-sm 9xl:text-2xl'>Хэмжээ</p>
                  <div className="flex justify-center items-center">
                    <div className="min-w-0 flex mx-2">
                      {orderArray.map(data =>
                        <p className='total text-xl font-semibold'>{data.size}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className='order1selectTotal1 flex flex-col'>
                  <p className='text-gray-500 flex ml-3 text-sm 9xl:text-2xl'>Нийт үнэ</p>
                  <p className='total text-red-700 text-3xl font-semibold' id="resultO">{sum}₮</p>
                </div>

                <Link className="nav-link cursor-pointer" to="#" id='submit' >
                  <button className="sagslahButton text-xl 9xl:text-5xl" onClick={Ordering}>
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
                  <select name="ml" id="mlselect" className='select' onChange={setValue}>
                    {data.map((res) =>
                      <option id="incase" value={[res.Capacity, res.BPrice, res.InCase]}>{res.Capacity}</option>
                    )}
                  </select>
                  <select name="avdar" id="avdar" className='select' onChange={setValue}>
                    {number.map(res =>
                      <option value={res} id='number'>{res} авдар</option>
                    )}
                  </select>
                  <div className='selectTotal'>
                    <p className='total pt-3 text-red-700' id="result"></p>
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

                  <Link className="nav-link" to="#" >
                    <button className="sagslahButton text-lg 9xl:text-4xl" onClick={Busket} id='submit'>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
          <p className='text-gray-900'>Нийт үнийн дүн захиалгын доод хэмжээнд хүрэхгүй байна! Захиалгын доод хэмжээ: 100.000 төгрөг</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
