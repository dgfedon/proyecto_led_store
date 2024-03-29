import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import useFormatNumber from '../../helpers/useFormatNumber';

import './itemList.css';


function Item( {product} ) {

    const { formatNumber } = useFormatNumber();

    return (
        <Col key={product.id} className="card--product">
            <Card>
                <div className="overflow">
                    <Card.Img variant="top" src={product.img} alt="..." />
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{product.name}</Card.Title>
                    <Card.Text className="text-center">{formatNumber(product.price)}</Card.Text>
                    <Link to={`/detalle/${product.id}`}>
                        <Button className="w-100 text-uppercase">ver detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item