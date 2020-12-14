import React from "react";

import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients)
  .map((igKey) => {
    return [...Array(ingredients[igKey])]
    .map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr,current)=> {
    return arr.concat(current)
  },[]);

  if(transformedIngredients.length===0){
      transformedIngredients=<p>Please start adding ingredients!</p>;
  }

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
