import useCotizador from "../hooks/useCotizador"

export const Error = () => {

    const {error} = useCotizador()

  return (
    <div className="border border-red-400 text-center font-bold text-red-700 bg-red-100 py-2">
        <p>{error}</p>
    </div>
  )
}
