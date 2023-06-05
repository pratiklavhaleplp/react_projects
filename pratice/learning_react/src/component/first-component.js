import React, { useState } from 'react';
import '../css/first-component.css';

const FirstComponent = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const rangeHandler = (e) => {
        setRangeValue(e.target.value);
        if (rangeValue === '25')
            console.log('the value id 25');
        else if (rangeValue === '50')
            console.log('the value id 50');
        else if (rangeValue === '75')
            console.log('the value id 75');
        else if (rangeValue === '100')
            console.log('the value id 100');
    }
    const colorChangeHandler = (e) => {
        console.log(e.target.value);
    }
    const buttonHandler = () =>{
        console.log('Done clicking...');
    }
    return (
        <div className='container'>
            <input className='flex-item' type="range" min="0" max="100" step="1" value={rangeValue} onChange={rangeHandler} /><br/>
            <input className='flex-item' type="color" value={'#FF0000'} onChange={colorChangeHandler} /><br/>
            <button className='flex-item' disabled={false} onClick={buttonHandler}>Click</button>
        </div>
    )
};

export default FirstComponent;
