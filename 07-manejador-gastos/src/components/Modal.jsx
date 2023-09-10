import { useState } from 'react';
import {Mensaje} from './'
import IconoCerrar from '../img/cerrar.svg';


export const Modal = ({setModal, animarModal, setAnimarModal, guardarGastos}) => {

    const [mensaje, setMensaje] = useState('');
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState('');
    const [categoriaGasto, setCategoriaGasto] = useState('');

    const limpiarForm = ()=> {
        setNombreGasto('');
        setCantidadGasto('');
        setCantidadGasto('');
    }

    const handleOcultarModal = ()=> {
        limpiarForm();
        setAnimarModal(false);
        
        setTimeout(() => {
            setModal(false);
        }, 500);
    }


    const handleSubmit = (e)=> {
        e.preventDefault();
        if([nombreGasto, cantidadGasto, categoriaGasto].includes('')){
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
        }
        guardarGastos({nombreGasto, cantidadGasto, categoriaGasto});
        limpiarForm();
        handleOcultarModal();
    }

  return (
    <div className="modal">
        <div className='cerrar-modal'>
            <img 
                src={IconoCerrar} 
                alt="button cerrar modal" 
                onClick={handleOcultarModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor="nombre">Nombre del gasto</label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder='Nombre del gasto'
                    value={nombreGasto}
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number" 
                    placeholder='Cantidad del gasto. Ejm. 2000'
                    value={cantidadGasto}
                    onChange={e => setCantidadGasto(Number(e.target.value))}
                />
            </div>
            
            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoriaGasto}
                    onChange={e => setCategoriaGasto(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="deudas">deudas por pagar</option>
                </select>
            </div>

            <input 
                type="submit" 
                value="Añadir gasto"
            />
            
        </form>
    </div>
  )
}
