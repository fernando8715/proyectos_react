import { useState } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import useCategorias from '../hooks/useCategorias';
import useBebidas from '../hooks/useBebidas';

export const Formulario = () => {

    const [alerta, setAlerta] = useState('');
    const [busqueda, setBusqueda] = useState({
        ingredient: '',
        category: ''
    });

    const { bebidas } = useCategorias();
    const { consultarBebidas } = useBebidas();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('');
        consultarBebidas(busqueda);
   }


    return (
        <Form className='mt-5' onSubmit={handleSubmit}>

            {alerta && <Alert variant='danger' className='text-center fw-bold mb-4'>{alerta}</Alert>}

            <Row>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='ingredient' className='fw-bold'>Buscar bebida</Form.Label>
                        <Form.Control
                            id="ingredient"
                            name='ingredient'
                            type="text"
                            placeholder='ej: Vodka, Tequila, etc'
                            value={busqueda.name}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='category' className='fw-bold'>Seleccionar categoria</Form.Label>
                        <Form.Select
                            id="category"
                            name='category'
                            value={busqueda.category}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option value=''>--Seleccione--</option>
                            {bebidas.map((b) => (
                                <option
                                    key={b.strCategory}
                                    value={b.strCategory}
                                >
                                    {b.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='mt-3 w-100 text-upperCase fw-bold'
                        type='submit'
                    >
                        Buscar Bebida
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
