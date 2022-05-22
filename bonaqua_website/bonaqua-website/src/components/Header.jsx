import React from 'react';
import logo from '../images/svg/home/logo.svg';
import busket from '../images/svg/home/header.svg';
import order from '../images/svg/home/Group 560.svg';
import tuuh from '../images/svg/home/zahialgiin tuuh.svg';
import sags from '../images/svg/home/tanii sags.svg';
import sagsicon from '../images/icons/busket.svg';

export default function Header() {
  return (
    
    <div className=''>
        <div className='header flex'>
            <div className='logo w-1/2 flex items-end ml-6'>
                <a className='nav-link' href='/'>
                    <img src={logo} alt="" className=''/>
                </a>
            </div>
            <div className='w-1/2 flex justify-end'>
                <div className='ProductAndOrder flex justify-center'>

                    <div className='busket flex relative'>
                    <img src={sagsicon} alt="" />
                        <div className='dun'>
                        <p className='busket'>124,600₮</p>
                        <p className='yourBusket'>Таны сагсанд</p>
                        </div>
                        
                    </div>
                    <div className='line my-auto'></div>
                    <div className='busket flex relative'>
                    <img src={sagsicon} alt="" />
                        <div className='dun'>
                        <p className='busket'>1234-5678</p>
                        <p className='yourBusket'>Захиалгын түүх</p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
