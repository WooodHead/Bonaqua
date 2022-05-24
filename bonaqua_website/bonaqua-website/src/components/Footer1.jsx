import React from 'react';
import water from '../images/svg/order 1/water 2.svg';
import footer from '../images/svg/order 1/dood tsetseg.svg';

export default function Footer1() {
  return (
    <div className='footer1 flex'>
            <img src={water} alt="" className='footerwater' />
            <img src={footer} alt="" className='footer1flower' />
    </div>
  )
}
