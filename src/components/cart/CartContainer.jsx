import Button from 'react-bootstrap/Button';
import CartItemList from './CartItemList';
import Container from 'react-bootstrap/Container';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

import 'animate.css';
import './cart.css';


function CartContainer() {

    const { cartList } = useCartContext();
    const navigate = useNavigate();


    return (
        <>
            {cartList.length === 0 ? (
                <Container className="head__cart--none">
                    <h3>El carrito está vacío</h3>
                    <Button onClick={() => {navigate('/')}} className="cart--button w-25">
                        Ir a tienda
                    </Button>
                </Container>
            ) : (
                <Container className="cart--product">
                    <h2 className="head--cart">Carrito de compras</h2>
                    <CartItemList />
                </Container>
            )}
        </>
    )
}

export default CartContainer