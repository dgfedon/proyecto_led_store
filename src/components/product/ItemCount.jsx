import Button from 'react-bootstrap/Button';
import React from 'react';
import { useCounter } from '../../helpers/useCounter';

import './itemList.css';


function ItemCount( {initial, stock, onAdd} ) {

    const {counter, handleRest, handleSum} = useCounter(initial = 1, stock);

    return (
        <>
            <span className="item__count--number">
                <Button onClick={handleRest}>-</Button>
                {counter}
                <Button onClick={handleSum}>+</Button>
            </span>
            <Button className="mt-2 w-75" onClick={() => onAdd(counter)}>
                Agregar al carrito
            </Button>
        </>
    )
}

export default ItemCount
