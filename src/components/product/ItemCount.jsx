import Button from 'react-bootstrap/Button';
import React from 'react';
import { useCounter } from '../../helpers/useCounter';

import './itemList.css';


function ItemCount( {initial, stock} ) {

    const {counter, handleRest, handleSum} = useCounter(initial, stock);

    return (
        <>
            <span className="item__count--number">
                <Button onClick={handleRest}>-</Button>
                {counter}
                <Button onClick={handleSum}>+</Button>
            </span>
        </>
    )
}

export default ItemCount
