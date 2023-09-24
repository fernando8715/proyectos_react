import {useState, useEffect} from 'react'

export const Filtros = ({filtro, setFiltro}) => {



  return (
    <div className='filtros contenedor sombra'>
        <form >
            <div className='campo'>
                <label htmlFor='categoria'>Categoria</label>
                <select 
                    id="categoria"
                    value={filtro}
                    onChange={ e => setFiltro(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="deudas">deudas por pagar</option>
                </select>
            </div>
        </form>
    </div>
  )
}
