import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useFormatNumber from '../../helpers/useFormatNumber';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore';

import './checkout.css';

function CheckoutCart() {

    const { cartList, clearCart, totalBuy } = useCartContext();
    const { formatNumber } = useFormatNumber();
    const [ orderId, setOrderId ] = useState();
    const [dataForm, setDataForm] = useState({ name: '', email: '', phone: '' })
    const navigate = useNavigate();


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const generateOrder = (e) => {
        e.preventDefault()

        let order = {}
            order.date = Timestamp.fromDate(new Date())
            order.buyer = dataForm
            order.total = totalBuy();
            order.products = cartList.map( item => {
                const id = item.id;
                const name = item.name;
                const subtotal = item.price * item.quantity;
                return {id, name, subtotal}
            })

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setOrderId(resp.id))
        .catch(error => console.log(error))
        .finally(() => { 
            clearCart()
            setDataForm({ name: '', email: '', phone: '' })
        })
    }

    if (orderId) {
        return (
            <Container className="container--order">
                <h2>Compra realizada con exito</h2>
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
                        {/* Total compra */}
                        <p>Total de la compra: {formatNumber(totalBuy())}</p>
                    </div>

                    {/* Formulario finalizar compra */}
                    <h3 className="text-center text-white" style={{fontSize: 30}}>Completar los siguientes datos:</h3>
                    <Form onChange={handleChange}>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="name"
                                    placeholder="Ej: Juana Petra" 
                                    defaultValue={dataForm.name} />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    name="phone"
                                    placeholder="Ej: 11 XXXX XXXX"
                                    defaultValue={dataForm.phone} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    defaultValue={dataForm.email} />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Confirmación Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="email"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    defaultValue={dataForm.emailConfirm} />
                            </Form.Group>
                        </Row>
                        <button disabled={
                            !dataForm.name || !dataForm.phone || !dataForm.email || dataForm.emailConfirm === dataForm.email} onClick={generateOrder} className="btn--checkout w-100">Generar orden</button>
                    </Form>
                </Container>
            )}
        </>
    )
}

export default CheckoutCart
