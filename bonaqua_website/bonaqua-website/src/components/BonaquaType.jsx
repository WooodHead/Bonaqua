import React, { useEffect, useState } from 'react';
import bigflower from '../images/svg/home/tsetseg tom.svg';
import bonaqua from '../images/bona0.5.png';
import { NavLink } from 'react-router-dom';

export default function BonaquaType() {
    const [data, setData] = useState([]);
    const [capacity, setCapacity] = useState("");

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
      buttonElement.classList.add('active');
      });
  });

    const imageArray = [
        { "img": bonaqua, "size": "1.5L" }, 
        { "img": bonaqua, "size": "4.5L" },
        { "img": bonaqua, "size": "800ml" },
        { "img": bonaqua, "size": "500ml" },
        { "img": bonaqua, "size": "330ml" },
        { "img": bonaqua, "size": "18.9L" },
        { "img": bonaqua, "size": "11.3L" },
      ];
    
      const [image, setImage] = useState(bonaqua);
      const [active, setActive] = useState("");

      var activeLink = [];
    
      data.forEach(x => { 
        activeLink.push(x.Capacity)
      })
      var l = activeLink[0];
      console.log(l)

      window.addEventListener('load', () => {
        
      })

  return (
    <div className='choosing w-full xl:w-1/2 flex items-center justify-center relative'>
          {/* <div className='choose flex justify-center self-center relative'>
            <div class="main">
              <ul>
                {data.map((res) =>
                  <li className='bonaquaType' onClick={() => { 
                      setCapacity(res.Capacity) 
                      imageArray.map(img => {
                        if (img.size == res.Capacity) {
                          setImage(img.img)
                        }
                      })
                  }}>
                    <ul>
                      <li id='liCapacity' value={res.Capacity} className="9xl:text-6xl">{res.Capacity}</li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </div> */}
          <div className='choose'>
             {
                data.map((res, index) => 
                <ul>
                <li key={index} >
                    <NavLink exact to={`#${res.Capacity}`}  id="bonaq" className={res === active ? "current": "nav-link"} onClick={() => { 
                        setCapacity(res.Capacity) 
                        imageArray.map(img => {
                          if (img.size == res.Capacity) {
                            setImage(img.img)
                          }
                        })
                        setActive(res)
                    }}>
                        {res.Capacity}
                    </NavLink>
                    </li>
                    </ul>
                )
             }
          </div>

          <div className='bona flex justify-center items-start relative'>
            <div className='flower absolute'>
              <img src={bigflower} alt="" className='bigflower' />
            </div>
              <img src={image} alt="" className='bonaquaImageType' />

            <div className='toirog absolute'>
              <div className='white flex justify-center items-center'>
                <div className='circle relative flex justify-center items-center'>
                  <p className='text-white font-semibold 9xl:text-4xl flex items-center' id='capaInCircle'>{capacity}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
