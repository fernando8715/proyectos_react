
export const ControlPresupuesto = ({presupuesto}) => {

    {/* Formatear un string a un tipo de moneda */}
    const formatearPresupuesto = (cantidad)=> {
        return cantidad.toLocaleString('es-US', {
            style:'currency', 
            currency: 'USD'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            grafica presupuesto
        </div>

        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span>{formatearPresupuesto(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{0}
            </p>
            
            <p>
                <span>Gastado: </span>{formatearPresupuesto(presupuesto)}
            </p>
        </div>

    </div>
  )
}

