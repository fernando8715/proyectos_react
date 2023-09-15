import { useState, useEffect } from 'react'
import { Header, Modal, ListadoGastos } from './components'
import {generarID} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [gastos, setGastos] = useState([]);
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
   if(Object.keys(gastoEditar).length>0){
    handleNuevoGasto();
   }
  }, [gastoEditar])
  
  

  const handleNuevoGasto = ()=> {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);
  } 

  const guardarGastos = (gasto)=> {
    if(Object.getOwnPropertyNames(gasto).includes('id')){
      const updateGastos = gastos.map(g => {
        if(g.id === gasto.id){
          return gasto
        } else {
          return g
        }
      })
      return setGastos(updateGastos);
    }
    gasto.id = generarID();
    gasto.date = Date.now();
    setGastos([...gastos, gasto]);
  }  

  const eliminarGasto = (id)=> {
    const updateGastos = gastos.filter(gasto => gasto.id !== id);
    setGastos(updateGastos);
  }
 
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
              gastos={gastos}
      />

      {isValidPresupuesto && 
        <>
          <main>
            <ListadoGastos 
                  gastos={gastos}
                  eliminarGasto={eliminarGasto}
                  setGastoEditar={setGastoEditar}
            />
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
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                />}

    </div>
  )
}

export default App
