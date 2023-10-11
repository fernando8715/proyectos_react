import {useRouteError} from 'react-router-dom'


export const ErrorPage = () => {

    const error = useRouteError();


  return (
    <div className='space-y-8'>
        <h2 className='text-blue-900 font-black text-6xl mt-10 text-center'>CRM - Clientes</h2>
        <p className='text-center'>Hubo un error</p>
        <p className='text-center'>{error.message}</p>
    </div>
  )
}
