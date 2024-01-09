import { createContext, useState } from 'react'
import { obtenerDiferenciaYear, formatearDinero, calcularCotizacion } from '../helpers'

const CotizadorContext = createContext();

// El provider es de donde vienen los datos
const CotizadorProvider = ({ children }) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const cotizarSeguro = () => {
        //  base
        //Restar 3% por año
        //costo por marca: americano = 0.15    -    europeo = 0.30   -   asiatico = 0.05
        //costo plan: basico 20%  -   //plan completo 50%

        let base = 2000;
        const diferenciaYear = obtenerDiferenciaYear(datos.year);
        const total = calcularCotizacion(base, diferenciaYear, datos.marca, datos.plan);

        setCargando(true);

        setTimeout(() => {
            setResultado(formatearDinero(total));        
            setCargando(false)
        }, 3000);
        
    }


    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    return (
        <CotizadorContext.Provider value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resultado, 
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext
