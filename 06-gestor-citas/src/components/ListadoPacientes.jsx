import { useEffect } from "react"
import { Paciente } from "./Paciente"


export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  useEffect( ()=> {
    if(pacientes.length > 0){
      (<h1>Paciente agregado</h1>)
    }
  }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 ml-3 mr-3 lg:ml-5">
      {
        (pacientes.length) 
          ? <>
              <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
              <p className="text-lg font-bold mt-5 mb-3 text-center">
                Administra tus {''}
                <span className="text-indigo-600">Pacientes y citas</span>
              </p>
              <div className="md:overflow-y-scroll h-screen">
                {
                  pacientes.map(paciente => (
                    <Paciente 
                            key={paciente.id} 
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}/>
                  ))
                }
              </div>
            </>
          : <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-lg font-bold mt-5 mb-3 text-center">
                Agrega tus {''}
                <span className="text-indigo-600">Pacientes y citas</span>
              </p>
            </>
      }
    </div>
  )
}
