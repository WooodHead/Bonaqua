import React, { useState, useEffect } from "react";
import bona from '../../images/bona0.5.png';

export default function AllOrder() {
  const [data, setData] = useState([]);

  const userarrays = sessionStorage.getItem("userarray");
  const userArray = JSON.parse(userarrays);

  const dugaarc = sessionStorage.getItem("dugaar");

  useEffect(() => {
    var getData = async () => {
      try {
        var data = await fetch('http://localhost:8088/api/bonaqua/orderHistory');
        var resData = await data.json();
        setData(resData)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  const ordernoarr = [];

  for (let i = 0; i < data.length; i++) {
    if( data[i].phonenumber == dugaarc) {
      ordernoarr.push({
        date: data[i].date,
        orderno: data[i].orderno,
        phonenumber: data[i].phonenumber
      })
    }
  }
 
  return (
    <>
    {ordernoarr.map((data, i) => 
    <div className="orderHistory flex mb-2">
      <div className="orderHistoryImg flex justify-center">
        <img src={bona} alt="" className="" />
      </div>
    
      <div className="orderHistoryInfo p-1 flex justify-between w-full mx-2 9xl:mx-8 my-2 items-center 9xl:text-3xl">
        <div className="date leading-3">
          <p className="text-gray-500 9xl:text-3xl">Огноо</p>
          <p className="font-semibold 9xl:text-3xl leading-5">{data.date}</p>
          <p className="font-semibold"></p>
        </div>
        <div className="state mx-3">
          <p className="text-gray-500">Төлөв</p>
          <p className="font-semibold">Баталгаажсан</p>
        </div>
        <div className="orderNumber mx-3">
          <p className="text-gray-500 leading-3">Захиалгын дугаар</p>
          <p className="font-semibold">{data.orderno}</p>
        </div>
        <div className="amount">
          <p className="text-gray-500">Дүн</p>
          <p className="font-semibold">{data.phonenumber}₮</p>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
