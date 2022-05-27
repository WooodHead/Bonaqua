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

export default function Content() {
  const { price, setPrice } = useContext(AppContext);
  const { value, setValues } = useContext(AppContext);
  const { capacity, setCapacity, total, setTotal } = useContext(AppContext);

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

  // data.map(x => console.log(x.Capacity))


  // Link
  const capa = document.getElementById('liCapacity');
  const circlein = document.getElementById('capaInCircle');
  const buttonElements = Array.from(document.querySelectorAll('.button'));
  buttonElements.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
      const activeElements = Array.from(document.querySelectorAll('.li-active'));
      activeElements.forEach(activeElement => {
        activeElement.classList.remove('li-active');
      });
      buttonElement.parentElement.classList.add('li-active');
      const capacity = capa.dataset.name;
      circlein.innerHTML = capacity;
    });
  });


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

  function Busket() {
    const incase = document.getElementById('mlselect').value.split(',')[2];
    const prices = document.getElementById('mlselect').value.split(',')[1];
    const number = document.getElementById('avdar').value;
    const result = document.getElementById('result');

    const busketTotal = `${((incase * prices) * number) + price}₮`;
    result.innerHTML = busketTotal;
    const total = (busketTotal + price);
    console.log(total)
    setTotal(total)
  }

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const addOrder = async (e) => {
    e.preventDefault();

    const jsonData = fetch('../data/ml.json', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: "500ml",
        incase: "12",
        price: "1234"
      })
    })
      .then(function (res) { console.log(res) })
      .catch(function (res) { console.log(res) })

    const convertJsonData = await jsonData.json();
  }

  return (
    <div className='mx-auto flex flex-col justify-between'>
      <div className='flex flex-col md:flex-row'>
        <div className='choosing w-full md:w-1/2 flex items-center relative'>
          <div className='choose flex justify-center self-center relative'>
            <div class="main">
              <ul>
                {data.map(res =>
                  <li className='bonaquaType'><a href="#" class="button">
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
              <p className='font-semibold text-3xl mb-10 9xl:text-6xl 9xl:mb-20' id='title'>Bonaqua</p>
              <div className='flex'>
                {/* <img src={table} alt="" className='tableImg' /> */}

                <form action="" id="mlform" className='flex relative flex-col md:flex-row'>
                  {/* <select name="ml" id="mlselect" className='select'>
                          {data.map((res, i) => 
                            <option value={res.BPrice} onChange={setPrice(i)}>{res.Capacity} {i}</option>
                          )}
                       
                  </select>
                  <select name="avdar" id="avdar" className='select' onChange={setValue}>
                          {data.map((res) => 
                            <option value={res.BPrice * res.InCase}>{res.BPrice * res.InCase}₮</option>
                          )}
                  </select>  */}
                  <select name="ml" id="mlselect" className='select' onChange={setValue}>
                    {data.map((res) =>
                      <>
                        <option id="incase" value={[res.Capacity, res.BPrice, res.InCase]}>{res.Capacity}</option>
                        {/* <option id="incase" value={res.Capacity} className='d-none'>{res.Capacity}</option>
                        <option id="incase" value={res.BPrice} className='d-none'>{res.BPrice}</option> */}
                      </>
                    )}
                  </select>

                  <select name="avdar" id="avdar" className='select' onChange={setValue}>
                    {number.map(res =>
                      <option value={res} id='number'>{res} авдар</option>
                    )}
                  </select>

                  <div className='selectTotal'>
                    <p className='total pt-3 text-red-700' id='result'>₮</p>
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

                  <Link className="nav-link" to="" id='submit' onClick={Busket}>
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
