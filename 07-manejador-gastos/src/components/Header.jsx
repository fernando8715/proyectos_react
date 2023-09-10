import { NuevoPresupuesto, ControlPresupuesto } from "./"

export const Header = ({
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto,
  gastado,
}) => {

  return (
    <header>
        <h1>Planificador de gastos</h1>
          {isValidPresupuesto
            ? <ControlPresupuesto 
                presupuesto={presupuesto}
                gastado={gastado}
              />
            : <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto} 
      />
        }
       
    </header>
  )
}
