import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import { Formulario } from "./components/formulario"

export const App = () => {

  const init = ()=> {
    const listado = JSON.parse(localStorage.getItem('pacientes')) || [];
    return listado;
  }
  const [pacientes, setPacientes] = useState( init );
  const [paciente, setPaciente] = useState({});

  useEffect( ()=> {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const updatePacientes = pacientes.filter(paciente => paciente.id !== id);
    localStorage.setItem('pacientes', JSON.stringify(updatePacientes));
    setPacientes(updatePacientes);
  }

  return (
    <div className="container mx-auto mt-20">
      {/* <h1 className='text-4xl font-bold uppercase'>App año</h1> */}
      <Header />
      
      <div className="mt-12 md:flex">
        <Formulario 
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
        />
        <ListadoPacientes 
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  )
}
