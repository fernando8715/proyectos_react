import {Gasto} from './'


export const ListadoGastos = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
        {gastos.map(gasto => (
            <Gasto 
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
  )
}
