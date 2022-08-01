import React, { useState, useEffect } from "react";
import bona from '../../images/bona0.5.png';
import ReactPaginate from "react-paginate";

export default function AllOrder() {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const perPage = 5;
  const pagesVisited = pageNumber * perPage;

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
    if (data[i].phonenumber == dugaarc) {
      ordernoarr.push({
        date: data[i].date,
        orderno: data[i].orderno,
        phonenumber: data[i].phonenumber
      })
    }
  }

  const display = ordernoarr.slice(pagesVisited, pagesVisited + perPage)
    .map(data => {
      return (
      <div className="orderHistory flex mb-2">
        <div className="orderHistoryImg flex justify-center">
          <img src={bona} alt="" className="" />
        </div>

        <div className="orderHistoryInfo flex flex-col sm:flex-row justify-between w-full mx-2 9xl:mx-8 my-2 items-center 9xl:text-3xl">
          <div className="flex flex-row w-full sm:w-1/2 justify-around">
          <div className="date">
            <p className="text-gray-500 9xl:text-3xl leading-3">Огноо</p>
            <p className="font-semibold 9xl:text-3xl">2022-08-01</p>
          </div>
          <div className="state">
            <p className="text-gray-500 leading-3">Төлөв</p>
            <p className="font-semibold">Баталгаажсан</p>
          </div>
          </div>
          <div className="flex flex-row w-full sm:w-1/2 justify-around">
          <div className="orderNumber">
            <p className="text-gray-500 leading-3">Захиалгын дугаар</p>
            <p className="font-semibold">{data.orderno}</p>
          </div>
          <div className="amount">
            <p className="text-gray-500 leading-3">Дүн</p>
            <p className="font-semibold">{data.phonenumber}₮</p>
          </div>
          </div>
        </div>
      </div>
      )
    })

  const pageCount = Math.ceil(ordernoarr.length / perPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className="page">
      {display}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}
