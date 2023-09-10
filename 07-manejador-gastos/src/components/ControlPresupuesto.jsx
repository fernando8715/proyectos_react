import {formatoDinero} from '../helpers'


export const ControlPresupuesto = ({presupuesto, gastado}) => {

    
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            grafica presupuesto
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatoDinero(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatoDinero(presupuesto-gastado)}
            </p>
            
            <p>
                <span>Gastado: </span>{formatoDinero(gastado)}
            </p>
        </div>

    </div>
  )
}

