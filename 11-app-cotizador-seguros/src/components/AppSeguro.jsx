import { Fragment } from "react"
import Formulario from "./Formulario"
import useCotizador from "../hooks/useCotizador";
import { Spinner } from "./spinner";
import { Resultado } from "./Resultado";

const AppSeguro = () => {

    const { cargando } = useCotizador();

    return (
        <Fragment>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
            </header>

            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto rounded-lg p-10 my-10">
                <Formulario />
                {(cargando) ? <Spinner /> : <Resultado />}
            </main>
        </Fragment>
    )
}

export default AppSeguro