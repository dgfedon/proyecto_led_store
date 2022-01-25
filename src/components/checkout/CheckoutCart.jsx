import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FormCheckout from './FormCheckout';
import Table from 'react-bootstrap/Table';
import useFormatNumber from '../../helpers/useFormatNumber';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, documentId, getDocs, getFirestore, query, Timestamp, where, writeBatch } from 'firebase/firestore';

import './checkout.css';


function CheckoutCart() {

    const { cartList, clearCart, totalBuy, dataForm, setDataForm } = useCartContext();
    const { formatNumber } = useFormatNumber();
    const [ orderId, setOrderId ] = useState();
    const navigate = useNavigate();

    // Generar orden
    const generateOrder = (e) => {
        e.preventDefault()

        // Crear orden
        let order = {}
            order.date = Timestamp.fromDate(new Date());
            order.buyer = dataForm;
            order.total = totalBuy();
            order.products = cartList.map( item => {
                const id = item.id;
                const name = item.name;
                const quantity = item.quantity;
                const subtotal = item.price * item.quantity;
                return {id, name, quantity, subtotal}
            })

        const db = getFirestore()

        // Actualizar stock
        function updateStock() {
            const batch = writeBatch(db)
            const collectionUpdate = collection(db, 'products')
            const stockCurrent = query(collectionUpdate, where(documentId(), 'in', cartList.map(p => p.id)))
            getDocs(stockCurrent)
            .then(resp => {
                resp.docs.forEach(route => {
                    batch.update(route.ref, {
                        stock: route.data().stock - cartList.find(items => items.id === route.id).quantity
                    })
                })
                batch.commit()
            })
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(error => console.log(error))
        .finally(() => { 
            setDataForm({ name: '', email: '', emailConfirm: '', phone: '' })
            updateStock()
            clearCart()
        })
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    // Mostrar id orden, si se completa
    if (orderId) {
        return (
            <Container className="container--order">
                <h2>Compra realizada con éxito</h2>
                <p>Tu número de orden es: <strong>{orderId}</strong>.</p>
                <Button onClick={() => {navigate('/')}} className="btn--checkout w-50">
                    Ir a tienda
                </Button>
            </Container>
        )
    }

    return (
        <>
            {cartList.length === 0 ? (
                <Container className="container--form">
                    <h3>Aún no agregaste productos al carrito</h3>
                    <Button onClick={() => {navigate('/')}} className="btn--checkout w-50">
                        Ir a tienda
                    </Button>
                </Container>
            ) : (
                <Container className="container--form">
                    <div className="summary--buy">
                        <h3>Resumen compra:</h3>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio por unidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(product =>
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>x{product.quantity}</td>
                                        <td>{formatNumber(product.price)}</td>
                                    </tr>)}
                            </tbody>
                        </Table>
                        {/* Total compra */}
                        <p>Total de la compra: {formatNumber(totalBuy())}</p>
                    </div>

                    {/* Formulario finalizar compra */}
                    <h3 className="text-center text-white" style={{fontSize: 30}}>Completar los siguientes datos:</h3>
                    <FormCheckout change={handleChange} send={generateOrder} />
                </Container>
            )}
        </>
    )
}

export default CheckoutCart
