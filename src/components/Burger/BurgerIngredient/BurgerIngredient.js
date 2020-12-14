import React from 'react';
import './BurgerIngredient.css';

 const BurgerIngredient = ({type}) => {
    let ingredient=null;
    

    switch(type) {
        case ('bread-bottom') : ingredient=<div className='bread-bottom' ></div>;
            break;
        case ('bread-top') : ingredient=<div className='bread-top' ></div>;
            break;
        case ('meat') : ingredient=<div className='meat' ></div>;
            break;
        case ('cheese') : ingredient=<div className='cheese' ></div>;
            break;
        case ('salad') : ingredient=<div className='salad' ></div>;
            break;
        default: ingredient=null;
    }
    return  ingredient;
}

export default BurgerIngredient;
