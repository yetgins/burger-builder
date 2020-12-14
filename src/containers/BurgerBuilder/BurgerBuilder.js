import React , {useState} from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';

const INGREDIENT_UNIT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
  };

const BurgerBuilder = () => {
    const [state,setState]=useState ({
        ingredients: {
            cheese:0,
            salad:0,
            meat:0
        },
        totalPrice:4,
        purchasing:false
    });

    const addIngredientHandler =(type) => {
        const oldCount = state.ingredients[type];
        const updatedCounted = oldCount +1;
        const updatedIngredients ={
            ...state.ingredients
        };
        updatedIngredients[type]=updatedCounted;
        const priceAddition = INGREDIENT_UNIT_PRICES[type];
        const oldPrice=state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        setState({totalPrice: newPrice,ingredients: updatedIngredients});
    };
    const removeIngredientHandler =(type) => {
        const oldCount = state.ingredients[type];
        if(oldCount<=0) return;
        const updatedCounted = oldCount -1;
        const updatedIngredients ={
            ...state.ingredients
        };
        updatedIngredients[type]=updatedCounted;
        const priceDeduction = INGREDIENT_UNIT_PRICES[type];
        const oldPrice=state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        setState({totalPrice: newPrice,ingredients: updatedIngredients});
    };

    const purchaseHandler =()=> {
        setState({totalPrice: state.totalPrice,ingredients: state.ingredients, purchasing: true});
    }
    return (
        <>  
           <Modal show={state.purchasing}>
               <OrderSummary 
                    ingredients={state.ingredients}
                    price={state.totalPrice}     />
           </Modal>
           <Burger ingredients={state.ingredients} />
           <BuildControls
            ingredientAdded ={addIngredientHandler}
            ingredientRemoved ={removeIngredientHandler}
            price={state.totalPrice}
            ordered={purchaseHandler}
           />
        </>
    );
}

export default BurgerBuilder;
