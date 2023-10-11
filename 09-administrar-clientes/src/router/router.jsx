import {createBrowserRouter} from 'react-router-dom';
import { Layaout, ErrorPage } from '../components';
import {Inicio, Loader as clientesLoader} from '../pages/Inicio'
import {NuevoCliente, action as nuevoClienteAction} from '../pages/NuevoCliente'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layaout/>,
        children: [
            {
                index: true,
                element: <Inicio />,
                loader: clientesLoader,
                errorElement: <ErrorPage />
            },
            {
                path: '/cliente/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction
            }
        ]
    }
])

