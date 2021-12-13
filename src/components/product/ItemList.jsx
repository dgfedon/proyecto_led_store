import Item from './Item';
import Row from 'react-bootstrap/Row';

import './itemList.css';


function ItemList( {products} ) {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {products.map(product => <Item key={product.id} product={product} />)}
        </Row>
    )
}

export default ItemList