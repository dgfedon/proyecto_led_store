import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from '../product/ItemCount';
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import useFormatNumber from '../../helpers/useFormatNumber';

import './detail.css';


function ItemDetail( {detail} ) {

    const navigate = useNavigate();
    const [addCart, setAddCart] = useState(0);
    const { cartList, addToCart } = useCartContext();
    const { formatNumber } = useFormatNumber();

    const onAdd = (quantity) => {
            setAddCart(true)
            addToCart( {...detail, quantity:quantity} )
        };

    console.log('ItemDetail', cartList);

    return (
        <>
            <Col key={detail.id} className="card--detail">
                <Card>
                    <Card.Img src={detail.img} alt="..." />
                    <Card.Body>
                        <Card.Title className="text-center">{detail.name}</Card.Title>
                        <Card.Text className="detail__text--description">{detail.description}</Card.Text>
                        <Card.Text className="detail__text--price">Precio: {formatNumber(detail.price)}</Card.Text>
                        <Card.Text className="detail__text--stock">Stock disponible: {detail.stock}</Card.Text>
                        {!addCart ? (
                            <ItemCount onAdd={onAdd} stock={detail.stock} />
                        ) : (
                            <Button onClick={() => {navigate('/cart')}} className="w-75">
                                Ir al carrito
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemDetail