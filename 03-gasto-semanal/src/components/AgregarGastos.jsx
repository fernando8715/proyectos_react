import { useState } from "react";


export const AgregarGastos = ({onAddGasto}) => {

    const [inputGasto, setInputGasto] = useState('');
    const [inputPrecio, setInputPrecio] = useState('');


    const onSubmitGasto = (event)=> {
        event.preventDefault();
        if(inputGasto.length <3 || inputPrecio.length < 3) return;
        
        const newGasto = {
            id: Date.now(),
            desc: inputGasto.toUpperCase(),
            prec: Number(inputPrecio)
        }
        onAddGasto(newGasto);
        setInputGasto('');
        setInputPrecio('')
    }

    const onInputDesc = ({target})=> {
        setInputGasto(target.value);
    }

    const onInputPrecio = ({target})=> {
        setInputPrecio(target.value);
    }
    
  return (

    <div className="col">
        <div className="contenido primario">
            <h2 className="text-center">Añade tus gastos aqui</h2>
            <form id="agregar-gasto" action="#">
                <div className="form-group">
                    <label>Descripcion:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="ingresa tu gasto minimo 3 caracteres"
                        value={inputGasto}
                        onChange={onInputDesc} />
                </div>
                
                <div className="form-group">
                    <label >Cantidad:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="ingresa el valor mayor a dos digitos"
                        value={inputPrecio}
                        onChange={onInputPrecio} />
                </div>
                <button onClick={onSubmitGasto}>enviar</button>
            </form>


        </div>
    </div>
  )
}
