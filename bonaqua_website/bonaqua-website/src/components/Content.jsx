import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import axios from 'axios';
import Instruction from './ProductInformation/Instruction';
import Nutrition from './ProductInformation/Nutrition';
import Product from './ProductInformation/Product';
import water from '../images/svg/home/water 2.svg';
import insta from '../images/svg/home/Instagram.svg';
import fb from '../images/svg/home/Facebook.svg';
import twitter from '../images/svg/home/Twitter.svg';
import productInfo from '../images/svg/home/buteegdhuunii medeelel.svg';
import bonaqua from '../images/bona0.5.png';
import list from '../images/svg/order 1/Ellipse -1.svg';
import { AppContext } from '../App';

export default function Content() {
  // const { value, setValue } = useContext(AppContext);
  // const datas = [];
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await fetch('http://localhost:8080/api/bonaqua', {
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //       });

  //       const resData = await data.json();

  //       for (let i = 0; i < data.length; i++) {
  //         datas.push(data[i].Capacity);
  //       }

  //       return resData;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getData();
  // }, [])
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/bonaqua")
      .then((res) => {
        // for(i=0; i < data.length; i++) {
        setData(data);
        console.log(data)
        // }
      })
  }, [])

  var Incase = {
    "one": {
      "case": 12,
      "price": 950
    },
    "two": {
      "case": 6,
      "price": 1480
    },
    "three": {
      "case": 4,
      "price": 3130
    },
  };
  // Link
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


  function setValue() {
    const size = document.getElementById('mlselect').value;
    const incase = document.getElementById('avdar').value;
    
    sessionStorage.setItem("SIZE", size);
    sessionStorage.setItem("INCASE", incase);
    
    const result = document.getElementById('result').innerHTML = `${size * incase}₮`;
    return result;
  }
  
  
  


  return (
    <div className='mx-auto flex flex-col justify-between'>
      <div className='flex flex-col md:flex-row'>
        <div className='choosing w-full md:w-1/2 flex items-center relative'>
          <div className='choose flex justify-center self-center relative'>
            {/* <ul className='chooseList flex flex-col justify-between cursor-pointer' id="ml"> */}
            {/* <li id='ml330'>
                <img src={list} alt="" />
              </li>
              <li id='ml500'>
                <img src={list} alt="" />
              </li>
              <li id='ml330'>
                <img src={list} alt="" />
              </li>
              <li id='ml330'>
                <img src={list} alt="" />
              </li>
              <li id='ml330'>
                <img src={list} alt="" />
              </li>
              <li id='ml330' >
                <img src={list} alt="" />
              </li> */}
            <div class="main">
              <ul>
                <li><a href="#" class="button">
                  <img src={list} alt="" id="lists"/>
                </a>
                  <ul>
                    <li>
                      <img src={bonaqua} alt="" className='type' />
                    </li>
                    <li>330ml</li>
                  </ul>
                </li>
                <li><a href="#" class="button">
                <img src={list} alt="" id="lists"/>
                </a>
                  <ul>
                    <li>500ml</li>
                  </ul>
                </li>
                <li><a href="#" class="button">
                <img src={list} alt="" id="lists"/>
                </a>
                  <ul>
                    <li>800ml</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* </ul> */}
          </div>

          <div className='bona flex justify-center items-start relative'>
            <img src={bonaqua} alt="" className='' />

            <div className='toirog absolute'>
              {/* <img src={toirog} alt="" className='' /> */}
              <div className='white flex justify-center items-center'>
                <div className='circle relative flex justify-center items-center'>
                  <p className='text-white font-semibold 9xl:text-4xl'>500 <span className='text-xs 9xl:text-9xl'>мл</span> </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='info w-full md:w-1/2 pl-4 flex flex-col'>
          <div className='water'>
            <img src={water} alt="" />
          </div>

          <div className='waterfor pl-3 flex flex-col justify-around'>


            <div className='sagslah'>
              <p className='font-semibold text-3xl mb-10 9xl:text-6xl 9xl:mb-20'>Bonaqua 500ml - 1.500₮</p>
              <div className='flex'>
                {/* <img src={table} alt="" className='tableImg' /> */}

                <form action="" id="mlform" className='flex relative flex-col md:flex-row' onChange={setValue}>
                  <select name="ml" id="mlselect" className='select'>
                    {/* <option id='quantity' value={data[0].Capacity}>{data[0].Capacity}</option> 
                          <option id='quantity' value={data[1].Capacity}>{data[1].Capacity}</option>
                          <option id='quantity' value={data[2].Capacity}>{data[2].Capacity}</option>
                          <option id='quantity' value={data[3].Capacity}>{data[3].Capacity}</option>
                          <option id='quantity' value={data[4].Capacity}>{data[4].Capacity}</option>
                          <option id='quantity' value={data[5].Capacity}>{data[5].Capacity}</option> 
                          <option id='quantity' value={data[6].Capacity}>{data[6].Capacity}</option>  */}
                    <option value="1">1</option>
                    <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                  </select>
                  <select name="avdar" id="avdar" className='select'>
                    <option value={Incase.one.case * Incase.one.price}>{Incase.one.case * Incase.one.price}₮</option>
                    <option value={Incase.two.case * Incase.two.price}>{Incase.two.case * Incase.two.price}₮</option>
                    <option value={Incase.three.case * Incase.three.price}>{Incase.three.case * Incase.three.price}₮</option>
                  </select>
                  <div className='selectTotal'>
                    <p className='total pt-3 text-red-700' id='result'>{Incase.one.case * Incase.one.price}₮</p>
                  </div>
                  <div className='tablenames absolute flex flex-col md:flex-row text-xs 9xl:text-9xl mt-1'>
                    <div className='tablename1'>
                      <p className=''>Хэмжээ</p>
                    </div>
                    <div className='tablename2'>
                      <p className=''>Багц</p>
                    </div>
                    <div className='tablename3'>
                      <p className=''>Нийт үнэ</p>
                    </div>
                  </div>

                  <Link className="nav-link" to="/order" id='submit' onClick={setValue}>
                    <button className="sagslahButton text-xl 9xl:text-5xl">
                      Сагслах
                    </button>
                  </Link>

                </form>
              </div>
            </div>

            <div className='productInfo'>
              <img src={productInfo} alt="" className='w-full' />
            </div>
            <Router>
              <div className='ChangeInfo'>
                <div className='link flex justify-between py-3'>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/">
                    Бүтээгдэхүүний тайлбар
                  </NavLink>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/instruction">
                    Хадгалах заавар
                  </NavLink>
                  <NavLink className={isActive => isActive ? "is-active" : "nav-link"} to="/nutrition">
                    Тэжээллэг чанар
                  </NavLink>
                </div>
                <div className=''>

                  <Switch>
                    <Route exact path="/" children={<Product />} />
                    <Route path="/instruction" children={<Instruction />} />
                    <Route path="/nutrition" children={<Nutrition />} />
                  </Switch>

                </div>
              </div>
            </Router>
          </div>

        </div>
        <div className='social flex flex-col justify-center items-center'>
          <img src={insta} alt="" className='sc' />
          <img src={fb} alt="" className='sc' />
          <img src={twitter} alt="" className='sc' />
        </div>
      </div>
    </div>
  )
}
