import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Instruction from './ProductInformation/Instruction';
import Nutrition from './ProductInformation/Nutrition';
import Product from './ProductInformation/Product';
import water from '../images/svg/home/water 2.svg';
import insta from '../images/svg/home/Instagram.svg';
import fb from '../images/svg/home/Facebook.svg';
import twitter from '../images/svg/home/Twitter.svg';
import productInfo from '../images/svg/home/buteegdhuunii medeelel.svg';
import bigflower from '../images/svg/home/tsetseg tom.svg';
import bonaqua from '../images/bona0.5.png';
import list from '../images/svg/order 1/Ellipse -1.svg';
import { AppContext } from '../App';
import $ from 'jquery';

export default function Content() {
  var { price, setPrice, array, setArray, total, setTotal, value, setValues, count, setCount } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    var getData = async () => {
      try {
        var data = await fetch('http://localhost:8080/api/bonaqua');
        var resData = await data.json();
        setData(resData)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])

  // Link
  const buttonElements = Array.from(document.querySelectorAll('.button'));
  buttonElements.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
      const activeElements = Array.from(document.querySelectorAll('.li-active'));
      activeElements.forEach(activeElement => {
        activeElement.classList.remove('li-active');
      });
      buttonElement.parentElement.classList.add('li-active');
      const circle = document.getElementById("capaInCircle");
      const capacity = document.getElementById("liCapacity").value;
      circle.innerHTML = capacity;
      console.log(capacity)
    });
  });

  window.onload = () => {
    const p = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const size = document.getElementById('mlselect').value.split(',')[0];
    const n = document.getElementById('avdar').value;
    const result = document.getElementById('result');
    const title = document.getElementById('title');

    result.innerHTML = `${p * incase * n}₮`;
    title.innerHTML = `Bonaqua ${size} - ${p}₮`;
  }

  function setValue() {
    const size = document.getElementById('mlselect').value.split(',')[0];
    const price = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const number = document.getElementById('avdar').value;
    const result = document.getElementById('result');
    const title = document.getElementById('title');

    const totals = (incase * price) * number;
    sessionStorage.setItem('total', totals);
    setPrice(totals);
    title.innerHTML = `Bonaqua ${size} - ${price}₮`;
    result.innerHTML = `${totals}₮`;
  }
  
  // Захиалга сагсанд орох
  function Busket() {
    const size = document.getElementById('mlselect').value.split(',')[0];
    const prices = document.getElementById('mlselect').value.split(',')[1];
    const incase = document.getElementById('mlselect').value.split(',')[2];

    const bagts = parseInt(document.getElementById('avdar').value);

    var index = array.findIndex(x => x.size == size); 

    index === -1 ? array.push({
          size: size,
          price: prices * incase * bagts, 
          tincase: incase * bagts,
          incase: incase, 
          avdar: bagts
    }) 
    : array.forEach(e=> {
        if(e.size == size) {
            e.price += (prices * incase) * bagts;
            e.tincase += (incase * bagts);
            e.avdar += bagts;
            console.log(e.avdar)
            setCount(e.avdar);
        }
    })
    
    sessionStorage.setItem("array", JSON.stringify(array));

    var sum = 0;
    array.forEach(x => {
      sum += x.price;
    });
      sessionStorage.setItem("sum", sum);
      setTotal(sum)
    }
  
  const number = Array(10).fill(0).map((e,i) => i+1 );

  // document.getElementById("avdar").select2({
  //   placeholder: 'Select an option'
  // });

  // $("#avdar").select2({
  //   placeholder: "Select",
  //   allowClear: true
  // });

  return (
    <div className='mx-auto flex flex-col justify-between'>
      <div className='flex flex-col md:flex-row'>
        <div className='choosing w-full md:w-1/2 flex items-center relative'>
          <div className='choose flex justify-center self-center relative'>
            <div class="main">
              <ul>
                {data.map(res =>
                  <li className='bonaquaType'>
                    <a href="#" class="button">
                      <img src={list} alt="" id="lists" />
                    </a>
                    <ul>
                      <li>{/* <img src={bonaqua} alt="" className='type' /> */}</li>
                      <li id='liCapacity' value={res.Capacity}>{res.Capacity}</li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className='bona flex justify-center items-start relative'>
            <div className='flower absolute'>
              <img src={bigflower} alt="" className='bigflower' />
            </div>
            <img src={bonaqua} alt="" className='' />

            <div className='toirog absolute'>
              <div className='white flex justify-center items-center'>
                <div className='circle relative flex justify-center items-center'>
                  <p className='text-white font-semibold 9xl:text-4xl' id='capaInCircle'> </p>
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
              <p className='font-semibold text-3xl mb-10 9xl:text-6xl 9xl:mb-20' id='title'></p>
              <div className='flex'>

                <form action="" id="mlform" className='flex relative flex-col md:flex-row'>
                  <select name="ml" id="mlselect" className='select' onChange={setValue}>
                    {data.map((res) =>
                      <option id="incase" value={[res.Capacity, res.BPrice, res.InCase]}>{res.Capacity}</option>
                    )}
                  </select>

                  <select name="avdar" id="avdar" className='select' onChange={setValue}>
                    {number.map(res =>
                      <option value={res} id='number'>{res} авдар</option>
                    )}
                  </select>

                  {/* <input type="number" name="example" list="exampleList" id='avdar' className='select' onChange={setValue}/>
                   <datalist id='exampleList'>
                  {number.map(res => 
                  <option value={res} id="number" placeholder='Хэмжээ'>{res}</option>
                  )}
                   </datalist> */}

                

                  <div className='selectTotal flex justify-center items-center text-center'>
                        <p className='total text-red-700 pt-4' id='result'></p>
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

                  <Link className="nav-link" to="#" id='submit' onClick={Busket}>
                    <button className="sagslahButton text-xl 9xl:text-5xl">
                      Сагслах
                    </button>
                  </Link>

                </form>
              </div>
            </div>

            <div className='productInfo'>
              <img src={productInfo} alt="" className='productImg' />
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
