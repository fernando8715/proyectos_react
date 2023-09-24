import {Gasto} from './'


export const ListadoGastos = ({gastos, eliminarGasto, setGastoEditar, filtro, gastosFiltrados}) => {
  return (
    <div className='listado-gastos contenedor'>

      {
        filtro ? (
          <>
            <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos para esta categoria'}</h2>
            {gastosFiltrados.map( gasto => (
              <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGasto={eliminarGasto}
                    setGastoEditar={setGastoEditar}
                />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
            {gastos.map(gasto => (
              <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  eliminarGasto={eliminarGasto}
                  setGastoEditar={setGastoEditar}
              />
            ))}
          </>
         )       
      }
    </div>
  )
}
