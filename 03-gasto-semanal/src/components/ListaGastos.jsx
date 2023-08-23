import { Presupuesto } from "./";



export const ListaGastos = ({gastos, presupuesto}) => {
    
  return (
    <div className="col">
        <div className="contenido secundario">

            <h2 className="text-center">Listado</h2>

            <div id="gastos">
                <ol className="list-group">
                    {gastos.map((gasto) => (
                        <li key={gasto.id} className="list-group-item descripcionGasto">
                            <strong>{gasto.desc} </strong>
                            <span className="precio">${gasto.prec}</span>
                        </li>
                    ))}
                </ol>
            </div>
            <Presupuesto presupuesto={presupuesto} gastos={gastos}/>

        </div> 
    </div>
  )
}
