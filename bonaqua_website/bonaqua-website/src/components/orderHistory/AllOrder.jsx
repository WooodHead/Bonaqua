import React from "react";
import bona from '../../images/bona0.5.png';
import addButton from '../../images/svg/order 1/+.svg';
import removeButton from '../../images/svg/order 1/-.svg';
import deleteButton from '../../images/svg/order 1/x.svg';

export default function AllOrder() {
  return (
    <div className="orderHistory flex">
    <div className="orderHistoryImg flex justify-center">
      <img src={bona} alt="" className="" />
    </div>
    <div className="orderHistoryInfo p-1 flex justify-between w-full mx-8 my-2">
      <div className="date leading-3">
        <p className="text-gray-500">Огноо</p>
        <p className="font-semibold">2022/05/12</p>
        <p className="font-semibold">15:34</p>
      </div>
      <div className="state">
        <p className="text-gray-500">Төлөв</p>
        <p className="font-semibold">Баталгаажсан</p>
      </div>
      <div className="orderNumber">
        <p className="text-gray-500">Захиалгын дугаар</p>
        <p className="font-semibold">123456789</p>
      </div>
      <div className="amount">
        <p className="text-gray-500">Дүн</p>
        <p className="font-semibold">1.234.567₮</p>
      </div>
    </div>
  </div>
  )
}
