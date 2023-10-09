
export const Cliente = ({cliente}) => {

    const {nombre, telefono, empresa, email, id} = cliente;

  return (
    <tr className="border-b" >
        <td className="p-6 space-y-2">
            <p className="text-xs font-bold md:text-2xl text-gray-800">{nombre}</p>
            <p className="text-xs md:text-base">{empresa}</p>
        </td>
        
        <td className="p-6">
            <p className="text-gray-800 text-xs md:text-lg"><span className="font-bold text-gray-600">Email: </span>{email}</p>
            <p className="text-gray-800 text-xs md:text-lg"><span className="font-semibold md:font-bold text-gray-600">Telefono: </span>{telefono}</p>
        </td>

        <td className="flex py-2 px-2 md:p-6 flex-col gap-4 font-bold">
            <button
                type="button"
                className="text-blue-600 hover:text-blue-800 uppercase text-xs py-1"
            >
                Editar
            </button>

            <button
                type="button"
                className="text-red-600 uppercase hover:text-red-800 text-xs py-1"
            >
                Eliminar
            </button>
        </td>

    </tr>
  )
}
