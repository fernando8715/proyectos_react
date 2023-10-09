import {Outlet, Link, useLocation} from 'react-router-dom';

export const Layaout = () => {

  // hook para obtener informacion de la pagina actual
  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h1 className='text-white font-bold text-4xl text-center'>CRM clientes</h1>
            <nav className='mt-10 text-center md:text-start'>
                <Link 
                  className={`${location.pathname == '/' ? 'text-blue-300' : 'text-white'} block text-2xl mt-2 text-white hover:text-blue-300`} 
                  to="/">Inicio</Link>
                <Link 
                  className={`${location.pathname === '/nuevo/cliente' ? 'text-blue-300' : 'text-white'} block text-2xl mt-2 text-white hover:text-blue-300`} 
                  to="cliente/nuevo">Nuevo cliente</Link>
            </nav>
        </aside>

        <main className='px-2 py-10 md:w-3/4 md:p-10 md:h-screen overflow-y-scroll'>
            <Outlet />
        </main>


    </div>
  )
}
