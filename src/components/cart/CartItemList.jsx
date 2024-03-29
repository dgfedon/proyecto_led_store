import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import useFormatNumber from '../../helpers/useFormatNumber';

import './cart.css';


function CartItemList() {

    const { cartList, clearCart, subtotalBuy, ivaBuy, totalBuy } = useCartContext();
    const { formatNumber } = useFormatNumber();
    const navigate = useNavigate();

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead> 
                <tbody>

                    {/* Items agregados al carrito */}
                    { cartList.map(product => <CartItem key={product.id} product={product} />) }

                    {/* Totales compra */}
                    <tr>
                        <td colSpan={3} className="text-end">Subtotal compra</td>
                        <td colSpan={2}>{formatNumber(subtotalBuy())}</td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="text-end">IVA</td>
                        <td colSpan={2}>{formatNumber(ivaBuy())}</td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="text-end">Total</td>
                        <td colSpan={2}>{formatNumber(totalBuy())}</td>
                    </tr>
                </tbody>
            </Table>

            <div className="d-flex justify-content-center">
                {/* Vaciar carrito */}
                <Button onClick={clearCart} className="cart--button">
                    Vaciar Carrito
                </Button>

                {/* Volver al inicio */}
                <Button onClick={() => {navigate('/')}} className="cart--button">
                    Seguir comprando
                </Button>

                {/* Terminar compra */}
                <Button onClick={() => {navigate('/checkoutCart')}} className="cart--button">
                    Terminar compra
                </Button>
            </div>
        </>
    )
}

export default CartItemList
