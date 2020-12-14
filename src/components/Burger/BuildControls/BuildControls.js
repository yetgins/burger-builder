import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const BuildControls = ({ingredientAdded,ingredientRemoved,price,ordered}) => {
    return (
        <div className='BuildControls'>
            <p>Current Price: <strong>{price.toFixed(2)}</strong> </p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() =>ingredientAdded(ctrl.type)}
                    removed={() => ingredientRemoved(ctrl.type)} />
            ))}

            <button 
                className='OrderButton'
                onClick={ordered}
                >ORDER NOW</button>
        </div>
    )
}

export default BuildControls;
