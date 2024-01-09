import { Fragment } from 'react';
import { Error } from '../components/Error'
import useCotizador from '../hooks/useCotizador';
import { MARCAS, YEARS, PLANES } from '../constants'


const Formulario = () => {

    const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('');
        cotizarSeguro();
    }

    return (
        <>
            {error && <Error />}

            <form onSubmit={handleSubmit} >
                <div>
                    <label className="block mb-3 text-gray-600 uppercase font-bold">Marca</label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                        value={datos.marca}
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="" >-- Seleccione --</option>

                        {MARCAS.map(marca => (
                            <option
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 text-gray-600 uppercase font-bold">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                        value={datos.year}
                        onChange={e => handleChangeDatos(e)}
                    >
                        <option value="" >-- Seleccione --</option>

                        {YEARS.map(year => (
                            <option
                                key={year}
                                value={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="my-5">
                    <label className="block mb-3 text-gray-600 uppercase font-bold">
                        Elige un plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>
                                <label >
                                    {plan.nombre}
                                </label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <input
                    type='submit'
                    className='w-full bg-indigo-600 hover:bg-indigo-800 transition-colors text-white font-bold text-lg uppercase py-2 cursor-pointer rounded-md'
                    value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario