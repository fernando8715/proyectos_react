import { useEffect, useState } from "react";
import { ErrorCamposVacios } from "./ErrorCamposVacios";
import { generarID } from "../helpers/generarID";

export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [error, setError] = useState(false);
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  useEffect( ()=> {
    if(Object.keys(paciente).length > 0){
      console.log(paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const handleSubmit = (e)=> {
    e.preventDefault();

    if([nombre, propietario, email, alta, sintomas].includes(''))
      return setError(true);
    
      const newRegistro = {
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }

      // quitar el componente del error
      setError(false);

      if(paciente.id){
        // Editando registro
        newRegistro.id = paciente.id;
        const pacienteUpdate = pacientes.map(pacienteState => (pacienteState.id === paciente.id) ? newRegistro : pacienteState);
        setPacientes(pacienteUpdate);
        setPaciente({}); 

      } else {
        // guardar registro del paciente
        newRegistro.id = generarID();
        setPacientes([...pacientes, newRegistro]);
      }
      

      // Reiniciar el form
      setNombre('');
      setPropietario('');
      setEmail('');
      setAlta('');
      setSintomas('');
  }

  return (
    <div className="md:w-1/2 ml-3 mr-3 lg:w-2/5 lg:ml-0 lg:mr-0 mb-10">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

        <p className="text-lg mt-5 mb-3 text-center font-bold">
            Añade pacientes {''}
            <span className="text-indigo-600 ">Administralos</span>
        </p>
        <form 
              onSubmit={handleSubmit} 
              className="bg-white shadow-md rounded-lg px-5 py-8"
        >
          {error && (
            <ErrorCamposVacios>
              <p>Todos los campos son obligatorios</p>
            </ErrorCamposVacios>)
}
          <div className="mb-5">
            <label 
                  htmlFor="mascota" 
                  className="block text-gray-700 font-bold uppercase"
            >
              Nombre Mascota
            </label>
            <input 
                  id="mascota"
                  type="text"
                  placeholder="nombre mascota"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)} 
                  className="border-2 p-2 mt-1 placeholder-gray-400 rounded-md w-full"
            />
          </div> {/*datos mascota */}
          <div className="mb-5">
            <label 
                  htmlFor="propietario" 
                  className="block text-gray-700 font-bold uppercase"
            >
              Nombre del propietario
            </label>
            <input 
                  id="propietario"
                  type="text"
                  placeholder="nombre del propietario"
                  value={propietario}
                  onChange={e => setPropietario(e.target.value)} 
                  className="border-2 p-2 mt-1 placeholder-gray-400 rounded-md w-full"
            />
          </div> {/*datos propietario */}
          <div className="mb-5">
            <label 
                  htmlFor="email" 
                  className="block text-gray-700 font-bold uppercase"
            >
              email
            </label>
            <input 
                    id="email"
                    type="email"
                    placeholder="email del propietario"
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    className="border-2 p-2 mt-1 placeholder-gray-400 rounded-md w-full"/>
          </div> {/*email propietario */}
          <div className="mb-5">
            <label 
                  htmlFor="alta" 
                  className="block text-gray-700 font-bold uppercase"
            >
              alta
            </label>
            <input 
                    id="alta"
                    type="date"
                    value={alta}
                    onChange={e => setAlta(e.target.value)}
                    className="border-2 p-2 mt-1 placeholder-gray-400 rounded-md w-full"/>
          </div> {/*fecha alta paciente */}
          <div className="mb-5">
            <label 
                  htmlFor="sintomas" 
                  className="block text-gray-700 font-bold uppercase"
            >
              sintomas
            </label>
            <textarea 
                      id="sintomas" 
                      className="w-full border-2 placeholder-gray-400 p-2 mt-1"
                      placeholder="Describe los sintomas"
                      value={sintomas} 
                      onChange={e => setSintomas(e.target.value)}/>
          </div> {/*sintomas paciente */}
          <input 
                type="submit" 
                className="bg-indigo-600 p-3 w-full rounded-md font-bold text-white uppercase hover:bg-indigo-900 transition-colors cursor-pointer"
                value={(paciente.id) ? 'Editar paciente' : 'Agregar paciente' } />
        </form>
    </div>
  )
}
