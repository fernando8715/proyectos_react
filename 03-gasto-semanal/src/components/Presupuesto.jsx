import { useEffect, useState } from "react";


export const Presupuesto = ({presupuesto, gastos}) => {
    
    const [restante, setRestante] = useState(presupuesto);
    const init = Number(presupuesto);
    let newRestante = init;
    
    useEffect(()=> {

        gastos.map(({prec})=> {
            newRestante = newRestante - prec;
            setRestante(newRestante);
        })

    }, [gastos])

  return (
    <div id="presupuesto" className="presupuesto">
        <div className="alert alert-primary">
            <p>Presupuesto: $ <span id="total">{presupuesto}</span> </p>
        </div>
        <div className="restante alert alert-success">
            <p>Restante: $ <span id="restante">{restante}</span></p>
        </div>
    </div>
  )
}
