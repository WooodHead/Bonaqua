import React from 'react';
import { useEffect, useState } from "react";

export default function Form() {
    // const [datas, setData] = useState([]);
    // useEffect(() => {
    //     fetch("../data/info.json")
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, []);

    // console.log(datas);


    return (
        <div className='flex justify-center items-center'>
            <form action="" className=''>
                <label for="values">Choose :</label>
               
                    <select name="values" id="values" className='border px-4'>
                        {/* <optgroup label="District"> */}
                            {/* {datas.map((data,i) => ( */}
                                <option value="value" selected>value</option>
                                <option value="value1">value1</option>
                                <option value="value2">value2</option>
                            {/* ))} */}
                        {/* </optgroup> */}
                    </select>

                <input type="submit" value="Submit" className='px-8' />
            </form>
         
        </div>
    )
}
