import { useLoaderData } from "react-router-dom";
import {Cliente} from '../components/index'

export function Loader(){
  const clientes = [
    {
      id: 1,
      nombre: 'Fernando',
      telefono: 123456,
      email: 'fernando@correo.com',
      empresa: 'codigoWar'
    },
    {
      id: 2,
      nombre: 'Allie',
      telefono: 123456,
      email: 'allie@correo.com',
      empresa: 'codigoWar'
    },
    {
      id: 3,
      nombre: 'Juan',
      telefono: 123456,
      email: 'juan@correo.com',
      empresa: 'codigo con juan'
    },
  ]

  return clientes;
}

// la funcion Loader es de React Router Dom, es similar al useEffect y useState de react, sirve para traer datos de una API
// esta funcion se define en cada componente que necesitemos traer informacion y se le coloca export
// el loader se debe importar en donde tengamos definido el router y renombrarlo con as
// en el componente donde lo usemos debemos importar useLoaderData, crear una constante y asignarle este hook de React Router Dom que me ppermite obtener los datos que retorna la funcion loader


export const Inicio = () => {

  const clientes = useLoaderData();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Clientes</h2>
      <p className="mt-2">Administra tus clientes</p>
      {clientes.length 
        ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-blue-800 text-white text-xs md:text-lg">
              <tr>
                <th className="border-r">Nombre</th>
                <th className="border-r">Contato</th>
                <th className="border-r">Accion</th>
              </tr>
            </thead>

            <tbody className="text-left">
              {clientes.map(cliente=> (
                <Cliente 
                    cliente={cliente}
                    key={cliente.id}
                />
              ))}
            </tbody>
          </table>
        )
        : <p>No hay clientes registrados</p>
      }
    </>
  )
}
