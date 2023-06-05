import React, { useState } from 'react'
import '../css/second-component.css'

const SecondComponent = () => {
    const [number, setNumber] = useState(0);
    const [arr, setArr] = useState([]);
    const clickHandler = () => {
        setArr((pre) => [...pre, number]);
    }
    const inputHandler = (e) => {
        setNumber(e.target.value);
    }
    return (
        <div className='parent-container'>
            <div className='first-container'>
                <input onChange={inputHandler} />
                <button onClick={clickHandler}>Add num</button>
            </div>
            <div className='second-container'>
                {
                    arr.map(ele => <h4 className='second-container-item' key={ele}>{ele}</h4>)
                }
            </div>
        </div>

    );
};

export default SecondComponent;