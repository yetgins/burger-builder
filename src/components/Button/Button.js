import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div>
          <button className={['Button','Danger','Success'].join(' ')}
            onClick={props.clicked}>
            {props.children}</button>  
        </div>
    )
}

export default Button
