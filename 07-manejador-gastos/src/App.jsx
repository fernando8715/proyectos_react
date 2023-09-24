import { useState, useEffect } from 'react'

import { Header, Modal, ListadoGastos, Filtros } from './components'
import {generarID} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  );
  
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
   if(Object.keys(gastoEditar).length>0){
    handleNuevoGasto();
   }
  }, [gastoEditar]);

  useEffect(()=> {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]); 

  useEffect(()=> {
    if(filtro){
      const gastosFiltrados = gastos.filter(g => g.categoriaGasto === filtro);   
      setGastosFiltrados(gastosFiltrados);
    }
  }, [filtro])

  useEffect(()=> {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;
    if(presupuestoLS > 0){
      setIsValidPresupuesto(true);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
    if(gastos.length === 0) {
      setFiltro('');
    } 
  }, [gastos]);
  
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

  const handleReset = ()=> {
    const resultado = confirm('¿Desear reiniciar presupuesto y gastos?');
    if(resultado){
      setPresupuesto(0);
      setGastos([]);
      setIsValidPresupuesto(false);
    } 
  }
 
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
              gastos={gastos}
              handleReset={handleReset}
      />

      {isValidPresupuesto && 
        <>
          <main>
            <Filtros
                  filtro={filtro}
                  setFiltro={setFiltro}
            />
            <ListadoGastos 
                  gastos={gastos}
                  eliminarGasto={eliminarGasto}
                  setGastoEditar={setGastoEditar}
                  filtro={filtro}
                  gastosFiltrados={gastosFiltrados}
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
