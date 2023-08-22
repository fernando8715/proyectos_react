import { AgregarGastos, ListaGastos } from "./components"

import './App.css'

export const AppGastoSemanal = () => {
  return (
    <div className="container">
      <header>
          <h1 className="text-center">Gasto Semanal</h1>
      </header>
      <section className="contenido-principal">
        
        <div className="row">
            <AgregarGastos />
            <ListaGastos />
        </div>


      </section>
    </div>
  )
}

