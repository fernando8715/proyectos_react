

export const ListaGastos = () => {
  return (
    <div className="col">
        <div className="contenido secundario">

            <h2 className="text-center">Listado</h2>

            <div id="gastos">
                <ul className="list-group"></ul>
            </div>
            <div id="presupuesto" className="presupuesto">
                <div className="alert alert-primary">
                    <p>Presupuesto: $ <span id="total"></span> </p>
                </div>
                <div className="restante alert alert-success">
                    <p>Restante: $ <span id="restante"></span></p>
                </div>
            </div>
        </div> 
    </div>
  )
}
