import React from 'react';
import sags from '../../images/svg/order 1/sagsnii medelel.svg';
import Footer1 from '../Footer1';

export default function Order() {
  return (
    <div className='mx-auto flex flex-col justify-between'>
      <div className='flex'>
        <div className='slideContent choosing flex items-center w-1/2 border-4'>
          <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">

            <div class="carousel-inner relative w-full overflow-hidden p-3">
              <div class="carousel-item active relative float-left w-full">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg" class="block w-full" alt="..." />

              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg" class="block w-full" alt="..." />

              </div>
              <div class="carousel-item relative float-left w-full">
                <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg" class="block w-full" alt="..." />

              </div>
              <div class="carousel-indicators absolute flex justify-center">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
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

        <div className='orderInfo'>
          <h2 className='mb-4'>Миний сагс</h2>
          <div className='flex'>
            <img src={sags} alt="" />
          </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  )
}
