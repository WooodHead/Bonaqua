import React from 'react';
import logo from '../images/svg/home/logo.svg';
import sagsicon from '../images/icons/busket.svg';
import history from '../images/svg/home/Group 560.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { AppContext } from '../App';

export default function Header() {
  const { price, setPrice, total } = useContext(AppContext);

  const arrays = sessionStorage.getItem("array");
  const orderArray = JSON.parse(arrays);

  const sum = sessionStorage.getItem("sum");

  const orderHistory = () => {
    e.preventDefault()
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className=''>
      <div className='header flex'>
        <div className='logo w-1/2 flex items-end ml-6'>
          <a className='nav-link' href='/'>
            <img src={logo} alt="" className='' />
          </a>
        </div>
        <div className='w-1/2 flex justify-end'>
          <div className='ProductAndOrder flex justify-center'>

            <div className='busket flex relative'>
              <img src={sagsicon} alt="" />
              <div className='dun'>
                <a className="nav-link" href='/order' id='submit' onClick="">
                  <p className='busket' id='resultH'>{sum}₮</p>
                  <p className='yourBusket'>Таны сагсанд</p>
                </a>
              </div>

            </div>
            <div className='line my-auto'></div>
            <div className='busket flex relative'>
              <img src={history} alt="" />
              <div className='dun cursor-pointer'>
                <p className='busket'>1234-5678</p>
                <a href="" onClick={handleShow}>
                  <p className='yourBusket'>Захиалгын түүх</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex w-100" >
            <h2 className="my-2 mx-auto">Захиалгын түүх</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="was-validated d-flex flex-column" id="" onSubmit={orderHistory}>
            <div className="row p-4">
              <p className='text-gray-400'>Захиалга өгсөн нэр болон утасны дугаараа оруулна уу!</p>
              <input className='py-2 px-3 w-100 input my-1 border' type="text" name="" id="" placeholder='Нэр' />
              <input className='py-2 px-3 w-100 input my-1 border' type="text" name="" id="" placeholder='Утасны дугаар' />
            </div>
            <Button variant="primary" type="submit" className="w-50 mx-auto" onClick={handleClose}>
              Харах
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
