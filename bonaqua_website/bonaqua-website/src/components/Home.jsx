import React from 'react';
import bonaqua from '../images/bona0.5.png';
import list from '../images/svg/order 1/Ellipse -1.svg';

export default function Home() {
  const buttonElements = Array.from(document.querySelectorAll('.button'));
  buttonElements.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
      const activeElements = Array.from(document.querySelectorAll('.li-active'));
      activeElements.forEach(activeElement => {
        activeElement.classList.remove('li-active');
      });
      buttonElement.parentElement.classList.add('li-active');
    });
  });

  return (
    <>
      <div class="main p-5">
        <ul>
          <li className='my-4'>
            <a href="#" class="button">
              <img src={list} alt="" />
            </a>
            <ul>
              <li>
                <img src={bonaqua} alt="" className='type' />
              </li>
              <li>330ml</li>
            </ul>
          </li>
          <li className='my-4'>
            <a href="#" class="button">
              <img src={list} alt=""  />
            </a>
            <ul>
              <li>
                <img src={bonaqua} alt="" className='type' />
              </li>
              <li>500ml</li>
            </ul>
          </li>
          <li className='my-4'>
            <a href="#" class="button">
              <img src={list} alt="" />
            </a>
            <ul>
              <li>
                <img src={bonaqua} alt="" className='type' />
              </li>
              <li>800ml</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
