import React from 'react';
//import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';
import { Link } from 'react-router-dom';
import {routes} from '../../config/Router';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const Toolbar = (props) => {
  
    return (
        <header className='Toolbar'>
            <h2>Mcking Burger</h2>
            <nav>
            {routes
            .filter((route) => !!route.isLink)
            .map((route) => (
              <li>
                <BrowserRouter className='brws'>
                    <Link className='link' to={route.path}>{route.title}</Link>
                </BrowserRouter>
                
              </li>
            ))}
            </nav>
        </header>
    )
}

export default Toolbar;