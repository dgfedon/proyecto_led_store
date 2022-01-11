import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loading from '../animation/Loading';
import ItemList from './ItemList';

import './itemList.css';


function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const database = getFirestore()
        const queryCollection = idCategory ? (
            query(collection(database, 'products'), where('category', '==', idCategory))
            ) : (
            query(collection(database, 'products'))
            )
        getDocs(queryCollection)
        .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [idCategory]);

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
