import React from 'react'
import Container from 'react-bootstrap/Container'

import './cart.css';


function CartContainer() {
    return (
        <Container>
            <h2 className="head--cart">Carrito de compras</h2>
            <div style={{height: '70vh'}}></div>
        </Container>
    )
}

export default CartContainer
