import CartItemList from './CartItemList';
import Container from 'react-bootstrap/Container';

import './cart.css';


function CartContainer() {

    return (
        <Container className="cart--product">
            <h2 className="head--cart">Carrito de compras</h2>
            <CartItemList />
        </Container>
    )
}

export default CartContainer
