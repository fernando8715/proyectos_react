
export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {id, nombre, propietario, email, alta, sintomas} = paciente;

  const handleEliminar = ()=> {
    const verificar = confirm(`Desea seguro de eliminar el paciente: ${nombre}`);
    (verificar) && eliminarPaciente(id);
  }

  return (
    <div className="bg-white shadow-lg rounded-lg px-5 py-8 mb-5"> 
        <p className="font-bold uppercase text-gray-700 mb-2">
        Nombre: {''}
        <span className="font-normal normal-case text">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
        Propetario: {''}
        <span className="font-normal normal-case text">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
        Email: {''}
        <span className="font-normal normal-case text">{email}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
        Fecha de alta: {''}
        <span className="font-normal normal-case text">{alta}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">
        sintomas: {''}
        <span className="font-normal normal-case text">{sintomas}</span>
        </p>

        <div className="flex justify-evenly mt-5">
          <button
                  type="submit"
                  onClick={()=> setPaciente(paciente)}
                  className="bg-indigo-600 py-2 px-10 font-bold text-white uppercase hover:bg-indigo-700 rounded-md"
          >
            Editar
          </button>
          <button
                  type="submit"
                  className="bg-red-600 py-2 px-10 font-bold text-white uppercase hover:bg-red-700 rounded-md"
                  onClick={handleEliminar}
          >
            Eliminar
          </button>
        </div>
    </div>    
  )
}
