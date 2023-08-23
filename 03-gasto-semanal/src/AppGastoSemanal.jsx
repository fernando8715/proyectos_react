import { useEffect, useState } from "react";
import { AgregarGastos, ListaGastos } from "./components"

import './App.css'

export const AppGastoSemanal = () => {

  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);

  useEffect( ()=> {
    const newPresupuesto = prompt('Ingrese el presupuesto');
    setPresupuesto(Number(newPresupuesto));
    
  }, [])

  const onAddGasto = (gasto)=> {
    setGastos([...gastos, gasto])
  }

  return (
    <div className="container">
      <header>
          <h1 className="text-center">Gasto Semanal</h1>
      </header>
      <section className="contenido-principal">
        
        <div className="row">
            <AgregarGastos onAddGasto={onAddGasto}/>
            <ListaGastos gastos={gastos} presupuesto={presupuesto}/>

        </div>


      </section>
    </div>
  )
}

