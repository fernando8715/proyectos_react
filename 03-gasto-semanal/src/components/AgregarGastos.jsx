

export const AgregarGastos = () => {

    
  return (
    <div className="col">
        <div className="contenido primario">
            <h2 className="text-center">Añade tus gastos aqui</h2>
                <form id="agregar-gasto" action="#">
                    <div className="form-group">
                        <label>Gasto:</label>
                        <input type="text" className="form-control" id="gasto" placeholder="Nombre Gasto"/>
                    </div>
                    <div className="form-group">
                        <label >Cantidad:</label>
                        <input type="text" className="form-control" id="cantidad" placeholder="Cantidad en $" />
                    </div>

                    <button type="submit" className="btn btn-primary">Agregar</button>
                </form>
        </div>
    </div>
  )
}
