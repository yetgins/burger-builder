import React from 'react';
import './Modal.css';

const Modal = ({children,show}) => {
    return (
        <div 
            className='Modal'
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1': '0'
            }}>
            {children}
        </div>
    )
}

export default Modal
