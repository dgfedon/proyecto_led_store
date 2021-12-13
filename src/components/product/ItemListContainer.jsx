import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { getFetch } from '../../helpers/getFetch';
import Loading from '../animation/Loading';
import ItemList from './ItemList';

import './itemList.css';


function ItemListContainer(props) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCategory } = useParams()

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
                            <Link className="dropdown--item" to="/categoria/categoria 1">Categoria 1</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="dropdown--item" to="/categoria/categoria 2">Categoria 2</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className="dropdown--item" to="/categoria/categoria 3">Categoria 3</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Dropdown>
                        <Dropdown.Toggle>Filtro</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/categoria/categoria 1">Categoria 1</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/categoria/categoria 2">Categoria 2</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/categoria/categoria 3">Categoria 3</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>
                <div className="d-flex justify-content-center">
                    { loading ? 
                        <Loading />
                        :
                        <ItemList products={products} />
                    }
                </div>
            </Container>
        </>
    )
}

export default ItemListContainer
