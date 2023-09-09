import { useState } from "react";
import {Mensaje} from './'

export const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  setIsValidPresupuesto
}) => {

  const [mensaje, setmensaje] = useState('');

  const handlePresupuesto = (e)=> {
    e.preventDefault();
    if(!presupuesto || presupuesto < 0){
      setmensaje('No es un presupuesto valido');
      return
    }
      setmensaje('');
      setIsValidPresupuesto(true);
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
              type="number"
              value={presupuesto}
              onChange={ e => setPresupuesto(Number(e.target.value))} 
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
