import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ItemCount from '../product/ItemCount';
import { Link } from "react-router-dom";
import { useAddCart } from '../../helpers/useAddCart';

import './detail.css';


function ItemDetail( {detail} ) {

    const {addCart, onAdd} = useAddCart();

    return (
        <>
            <Col key={detail.id} className="card--detail">
                <Card>
                    <Card.Img src={detail.img} alt="..." />
                    <Card.Body>
                        <Card.Title className="text-center">{detail.name}</Card.Title>
                        <Card.Text className="detail__text--description">{detail.description}</Card.Text>
                        <Card.Text className="detail__text--price">Precio: {detail.price.toFixed(2)}</Card.Text>
                        <Card.Text className="detail__text--stock">Stock disponible: {detail.stock}</Card.Text>
                        {!addCart ? (
                            <ItemCount stock={detail.stock} onAdd={onAdd} />
                        ) : (
                            <Button className="mt-2 w-75">
                                <Link to="/cart">Ir al carrito</Link>
                            </Button>
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemDetail