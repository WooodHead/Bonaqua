import React from 'react';
import bonaqua from '../images/bona0.5.png';
import list from '../images/svg/order 1/Ellipse -1.svg';
import Content from './Content';

export default function Home() {
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

  return (
    <>
    {data.map(res, i => 
      <Content 
        key = {i}
        capacity = {res.Capacity}
        incase = {res.InCase}
        price = {res.BPrice}
      />
    )}
    
    </>
  )
}
