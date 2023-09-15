import { useEffect, useState } from 'react'
import {formatoDinero} from '../helpers'


export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(()=> {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidadGasto + total, 0);
        setDisponible(presupuesto-totalGastado);
        setGastado(totalGastado);
    }, [gastos])

    
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
                <span>Disponible: </span>{formatoDinero(disponible)}
            </p>
            
            <p>
                <span>Gastado: </span>{formatoDinero(gastado)}
            </p>
        </div>

    </div>
  )
}

