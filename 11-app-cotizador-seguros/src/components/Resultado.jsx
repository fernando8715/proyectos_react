import { useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador"

export const Resultado = () => {

    const { resultado, datos } = useCotizador();

    if (resultado === 0) return null
    
    const { marca, plan, year } = datos;
    const yearRef = useRef(year);

    const [nombreMarca] = useMemo( ()=> MARCAS.filter(m => m.id === Number(marca)), [resultado] );
    
    const [nombrePlan] = useMemo( ()=> PLANES.filter(p => p.id === Number(plan) ), [resultado]
    );

    return (
        <div className="bg-gray-200 text-center mt-5 p-5 shadow rounded-md">
            <h2 className="text-3xl font-black text-gray-700">Resumen</h2>
            <div className="mt-4 mx-auto text-center">
                <p className="my-2"><span className="font-bold">Marca: </span>
                    {nombreMarca.nombre}
                </p>
                <p className="my-2"><span className="font-bold">Plan: </span>
                    {nombrePlan.nombre}
                </p>
                <p className="my-2"><span className="font-bold">Modelo: </span>
                    {yearRef.current}
                </p>
                <p className="my-2 text-2xl"><span className="font-bold">Total Cotización </span>
                    {resultado}
                </p>
            </div>
        </div>
    )
}
