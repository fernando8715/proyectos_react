import { NuevoPresupuesto, ControlPresupuesto } from "./"

export const Header = ({
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPresupuesto,
  gastos,
  handleReset,
}) => {

  return (
    <header>
        <h1>Planificador de gastos</h1>
          {isValidPresupuesto
            ? <ControlPresupuesto 
                presupuesto={presupuesto}
                gastos={gastos}
                handleReset={handleReset}
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
