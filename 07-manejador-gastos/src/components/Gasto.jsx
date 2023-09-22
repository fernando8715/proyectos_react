import React from 'react';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import {formatoDinero, formatoFecha} from '../helpers';
import iconoAhorro from '../img/icono_ahorro.svg';
import iconoCasa from '../img/icono_casa.svg';
import iconoComida from '../img/icono_comida.svg';
import iconoGastos from '../img/icono_gastos.svg';
import iconoOcio from '../img/icono_ocio.svg';
import iconoSalud from '../img/icono_salud.svg';
import iconoSuscripciones from '../img/icono_suscripciones.svg';

export const Gasto = ({gasto, eliminarGasto, setGastoEditar}) => {
    const {id, nombreGasto, cantidadGasto, categoriaGasto, date} = gasto;
    
    const diccionarioIconos = {
      ahorro: iconoAhorro,
      comida: iconoComida,
      casa: iconoCasa,
      gastos: iconoGastos,
      ocio: iconoOcio,
      salud: iconoSalud,
      suscripciones: iconoSuscripciones,
      deudas: iconoAhorro
    }

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => {
          setGastoEditar(gasto)
        }}
        >
          Editar
        </SwipeAction>
      </LeadingActions>
    );
    
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction
          destructive={true}
          onClick={() => eliminarGasto(id)}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img src={diccionarioIconos[categoriaGasto]} alt={`icono de ${categoriaGasto}`} />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoriaGasto}</p>
              <p className='nombre-gasto'>{nombreGasto}</p>
              <p className='fecha-gasto'>
                Agregado el: {''}
                <span>{formatoFecha(date)}</span>
              </p>
            </div>
          </div>
            <p className='cantidad-gasto'>{formatoDinero(cantidadGasto)}</p>
        </div>
        </SwipeableListItem>
      </SwipeableList>
  )
}
