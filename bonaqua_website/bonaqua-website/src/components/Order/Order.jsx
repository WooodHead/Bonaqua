import React from "react";
import sags from "../../images/svg/order 1/sagsnii medelel.svg";
import insta from "../../images/svg/home/Instagram.svg";
import fb from "../../images/svg/home/Facebook.svg";
import twitter from "../../images/svg/home/Twitter.svg";
import table from '../../images/svg/home/sagslag husnegt.svg';
import button from '../../images/svg/home/Button.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="mx-auto flex flex-col justify-between">
      <div className="flex border">
        <div className="w-1/2 flex items-center relative">
          <div className="slideContent choosing flex items-center w-full border-4">
            <div
              id="carouselExampleCaptions"
              class="carousel slide relative"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden p-3">
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

        <div className="info w-1/2 border">
          <div className="orderInfo">
            <h2 className="mb-4">Миний сагс</h2>
            <div className="flex">
              <img src={sags} alt="" />
            </div>
            <div className="addOrder">
            <div className='flex items-end'>
                    <img src={table} alt="" className='tableImg' />
                    <Link className='nav-link' to="/order">
                      <img src={button} alt="" className='buttonImg' />
                    </Link>

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
