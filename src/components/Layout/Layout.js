import React from 'react';
import './Layout.css';
import Toolbar from '../Toolbar/Toolbar';

const Layout = ({children}) => {
    return (
        <>
            <Toolbar />
            <div className='content' >
                {children}
            </div>
    
        </>
    )
}

export default Layout;
