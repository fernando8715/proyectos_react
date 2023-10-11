import { useLoaderData } from "react-router-dom";
import {obtenerClientes} from '../data/clientes'
import {Cliente} from '../components/index'

export async function Loader(){
  const clientes = await obtenerClientes();
  return clientes
}

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
        : <p className="text-center">No hay clientes registrados</p>
      }
    </>
  )
}
