import {createBrowserRouter} from 'react-router-dom';
import { Layaout, ErrorPage } from '../components';
import {Inicio, Loader as clientesLoader} from '../pages/Inicio'
import {NuevoCliente, action as nuevoClienteAction} from '../pages/NuevoCliente'
import {EditarCliente, loader as editarClienteLoader, action as editarClienteAction} from '../pages/EditarCliente'
import {action as eliminiarClienteAction} from '../components/Cliente'


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
            },
            {
                path: '/clientes/:clienteId/editar',
                element: <EditarCliente />,
                loader: editarClienteLoader,
                action: editarClienteAction,
                errorElement: <ErrorPage />
            },
            {
                path: '/clientes/:clienteId/eliminar',
                action: eliminiarClienteAction,
            }
        ]
    }
])

