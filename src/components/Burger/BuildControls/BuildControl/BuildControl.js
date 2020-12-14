import React from 'react';
import './BuildControl.css';

const BuildControl = ({label,added,removed}) => {
    return (
        <div className='BuildControl'>
            <div className='Label'>{label}</div>
            <button className='Less' onClick={removed}>-</button>
            <button className='More' onClick={added}>+</button>
        </div>
    )
}

export default BuildControl;
