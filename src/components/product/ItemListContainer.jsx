import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getFetch } from '../../helpers/getFetch';
import Loading from '../animation/Loading';
import ItemList from './ItemList';

import './itemList.css';


function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory) {
            getFetch
            .then(respData => setProducts(respData.filter(product => product.category === idCategory)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(respData => setProducts(respData))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }
    }, [idCategory])

    return (
        <>
            <Container>
                <div className="head--product">
                    <h2>{props.heading}</h2>
                    <NavDropdown title="Filtro" id="offcanvasNavbarDropdown">
                        <NavDropdown.Item>
                            <Link className="dropdown--item" to="/categoria/luces">Luces</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="dropdown--item" to="/categoria/barras">Barras</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="dropdown--item" to="/categoria/carteles">Carteles</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
                <div className="d-flex justify-content-center">
                    { loading ? (
                        <Loading load='Cargando productos' />
                    ) : (
                        <ItemList products={products} />
                    )}
                </div>
            </Container>
        </>
    )
}

export default ItemListContainer
