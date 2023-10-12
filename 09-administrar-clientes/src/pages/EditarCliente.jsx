import { Form, useActionData, useLoaderData, useNavigate, redirect } from 'react-router-dom';
import { Formulario, Error } from '../components';
import { obtenerCliente, actualizarCliente } from "../data/clientes";

export const loader = async ({ params }) => {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.values(cliente).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'No se encontro resultados'
    })
  };
  return cliente;
}

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const email = formData.get('email');

  // validaciones
  const errores = [];

  if (Object.values(datos).includes('')) { errores.push('Todos los campos son obligatorios') };

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if (!regex.test(email)) { errores.push('El correo no es valido') };

  if (Object.keys(errores).length) {
    return errores
  }

  await actualizarCliente(datos, params.clienteId);

  return redirect('/')
}

export const EditarCliente = () => {

  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Editar cliente</h2>
      <p className="mt-2">Aqui puedes editar los datos del cliente</p>

      <div className='flex justify-end'>
        <button
          className='bg-blue-800 hover:bg-blue-600 mt-3 px-3 py-2 rounded-md text-white font-bold text-sm uppercase'
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white md:w-3/4 mx-auto shadow-sm rounded-md px-5 py-10 mt-12'>
        <Form
          method='put'
        >
          {errores?.length && errores.map((error, i) => (
            <Error key={i}>{error}</Error>
          ))}
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className='bg-blue-800 w-full text-white uppercase font-bold p-2 text-sm mt-5'
            value='Editar Cliente'
          />
        </Form>
      </div>
    </>
  )
}
