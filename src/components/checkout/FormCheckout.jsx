import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Formik, ErrorMessage } from 'formik';
import { useCartContext } from '../../context/CartContext';

import './checkout.css';


function FormCheckout({ send, change }) {

    const { dataForm } = useCartContext();

    return (
        <>
            <Formik
                validate={() => {
                    let error = {};

                    if (!dataForm.name) {
                        error.name = 'Ingresa un nombre';
                    } else if (dataForm.name.length < 3) {
                        error.name = 'Nombre inválido';
                    }

                    if (!dataForm.phone) {
                        error.phone = 'Ingresa un número móvil';
                    } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(dataForm.phone)) {
                        error.phone = 'Número móvil inválido';
                    }

                    if (!dataForm.email) {
                        error.email = 'Ingresa un email, nos comunicamos por este medio';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(dataForm.email)) {
                        error.email = 'Email inválido';
                    }

                    return error;
                }}
                >
                {({ handleBlur, isValid }) => (
                    <Form onChange={change}>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label htmlFor="name">Nombre</Form.Label>
                                <Form.Control 
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ej: Nombre Apellido"
                                    required
                                    defaultValue={dataForm.name}
                                    onBlur={handleBlur} />
                                <ErrorMessage name="name" component="span" className="validate--error" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label htmlFor="phone">Teléfono</Form.Label>
                                <Form.Control 
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Ej: 11 XXXX XXXX"
                                    required
                                    defaultValue={dataForm.phone}
                                    onBlur={handleBlur} />
                                <ErrorMessage name="phone" component="span" className="validate--error" />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control 
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    required
                                    defaultValue={dataForm.email}
                                    onBlur={handleBlur} />
                                <ErrorMessage name="email" component="span" className="validate--error" />
                            </Form.Group>
                            <Form.Group className="mb-3 w-50">
                                <Form.Label>Confirmación Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="emailConfirm"
                                    placeholder="Ej: nombre@ejemplo.com"
                                    required
                                    defaultValue={dataForm.emailConfirm}
                                    onBlur={handleBlur} />
                            </Form.Group>
                        </Row>
                        <button type="submit" disabled={ dataForm.name === '' || dataForm.phone === '' || dataForm.email === '' || dataForm.email !== dataForm.emailConfirm ? true : false || isValid === false } onClick={send} className="btn--checkout w-100">
                            Generar orden
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormCheckout

