import React from 'react';
import footer from '../images/svg/home/FOOTER.svg';
import flower from '../images/svg/order 1/dood tsetseg.svg';

export default function Footer() {
  return (
        <div className='footer'>
            <img src={flower} alt="" className='flowerFoot' />
            <img src={footer} alt="" className='' />
        </div>
  )
}
