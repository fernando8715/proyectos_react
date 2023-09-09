import { useState } from "react";
import {Mensaje} from './'

export const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

  const [mensaje, setmensaje] = useState('');

  const handlePresupuesto = (e)=> {
    e.preventDefault();
    if(!Number(presupuesto) ||Number(presupuesto) <= 0){
      setmensaje('No es un presupuesto valido');
      console.log('no es un numero');
    }else{
      setmensaje('Es un numero')
      console.log('es un numero');
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">
            Definir presupuesto
          </label>
          <input 
              id="presupuesto"
              className="nuevo-presupuesto"
              type="text"
              value={presupuesto}
              onChange={ e => setPresupuesto(e.target.value)} 
          />
          <input 
              type="submit"
              value="Añadir" 
          />

        </div>
      {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>


    </div>
    
  )
}
