import { useState } from 'react'
import { Header, Modal, ListadoGastos } from './components'
import {generarID} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [gastado, setGastado] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);


  const handleNuevoGasto = ()=> {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  }

 

  const guardarGastos = (gasto)=> {
    gasto.id = generarID();
    gasto.date = Date.now();
    setGastos([...gastos, gasto]);
    setGastado(gastado + gasto.cantidadGasto);
  }
 
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
              gastos={gastos}
              gastado={gastado}
      />

      {isValidPresupuesto && 
        <>
          <main>
            <ListadoGastos gastos={gastos}/>
          </main>

          <div className='nuevo-gasto'>
            <img 
                src={IconoNuevoGasto} 
                alt="icono nuevo gasto" 
                onClick={handleNuevoGasto}
            />
          </div>
        </>
      }

      {modal && <Modal 
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGastos={guardarGastos}
                />}

    </div>
  )
}

export default App
