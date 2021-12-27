import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from '../animation/Loading';
import Container from 'react-bootstrap/Container';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer() {

    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idDetail } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const docDetail = doc(db, 'products', idDetail)
        getDoc(docDetail)
        .then(detail => setDetail({id: detail.id, ...detail.data()}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    }, [idDetail])

    return (
        <Container>
            <h2 className="head--detail">Detalle Producto</h2>
            <div>
                { loading ? 
                    <Loading load='Cargando detalle' />
                    :
                    <ItemDetail key={detail.id} detail={detail} />
                }
            </div>
        </Container>
    )
}

export default ItemDetailContainer