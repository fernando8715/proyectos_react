import {Form, useNavigate, useActionData, redirect} from 'react-router-dom';
import {Formulario, Error} from '../components/index';
import {agregarCliente} from '../data/clientes'

export async function action({request}) {
  
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const email = formData.get('email');
  
  // validaciones
  const errores = [];
  
  if(Object.values(datos).includes('')) {errores.push('Todos los campos son obligatorios')};
  
  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){errores.push('El correo no es valido')};

  if(Object.keys(errores).length){
    return errores
  }

  await agregarCliente(datos);
  
  return redirect('/')
}

export const NuevoCliente = () => {

  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h2 className="font-black text-4xl text-blue-900">Nuevo cliente</h2>
      <p className="mt-2">Registra todos los datos del cliente</p>

      <div className='flex justify-end'>
        <button 
          className='bg-blue-800 hover:bg-blue-600 mt-3 px-3 py-2 rounded-md text-white font-bold text-sm uppercase'
          onClick={()=> navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className='bg-white md:w-3/4 mx-auto shadow-sm rounded-md px-5 py-10 mt-12'>
        <Form
          method='post'
        >
          {errores?.length && errores.map( (error, i)=>(
            <Error key={i}>{error}</Error> 
          ))}
          <Formulario />

          <input 
            type="submit" 
            className='bg-blue-800 w-full text-white uppercase font-bold p-2 text-sm mt-5'
            value='Registrar Cliente'
          />
        </Form>
      </div>



    </>
  )
}
