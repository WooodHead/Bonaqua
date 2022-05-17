import React from 'react';
import logo from '../images/svg/home/logo.svg';
import busket from '../images/svg/home/header.svg';
import order from '../images/svg/home/Group 560.svg';
import tuuh from '../images/svg/home/zahialgiin tuuh.svg';
import sags from '../images/svg/home/tanii sags.svg';

export default function Header() {
  return (
    <div className=''>
        <div className='header flex'>
            <div className='logo w-1/2 flex items-end ml-6'>
                <img src={logo} alt="" />
            </div>
            <div className='w-1/2 flex justify-end'>
                <div className='ProductAndOrder flex p-2'>

                    <div className='busket flex flex-col relative'>
                        {/* <img className='border' src={busket} alt=""/>
                        <p className='mb-1 mx-2'>Таны сагсанд</p> */}
                        <p className='absolute'>124,600₮</p>
                        <img src={sags} alt="" />
                    </div>
                    <div className='line my-auto'></div>
                    <div className='order flex flex-col relative'>
                        {/* <img src={order} alt=""/>
                        <p className='mb-1 mx-2'>Захиалгын түүх</p> */}
                        <p className='absolute'>1234-5678</p>
                        <img src={tuuh} alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
