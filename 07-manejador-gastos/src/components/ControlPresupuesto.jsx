import { useEffect, useState } from 'react'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {formatoDinero} from '../helpers'


export const ControlPresupuesto = ({presupuesto, gastos, handleReset}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(()=> {
        const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidadGasto + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        const calcPorcentaje = (((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2);

        setDisponible(presupuesto-totalGastado);
        setGastado(totalGastado);

        setTimeout(() => {
            setPorcentaje(calcPorcentaje);
        }, 1500);
    }, [gastos]);
    
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar  
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                    trailColor: '#e1e0e0',
                    textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
                    
                })}
                value={porcentaje} 
                text={`${porcentaje}% Gastado`} 
                />
        </div>

        <div className="contenido-presupuesto">
            <button 
                className='reset-app'
                type='button'
                onClick={()=> handleReset()}
            >Resetear app
            </button>
            <p>
                <span>Presupuesto: </span>{formatoDinero(presupuesto)}
            </p>

            <p className={disponible < 0 ? 'negativo' : ''}>
                <span>Disponible: </span>{formatoDinero(disponible)}
            </p>
            
            <p>
                <span>Gastado: </span>{formatoDinero(gastado)}
            </p>
        </div>

    </div>
  )
}

