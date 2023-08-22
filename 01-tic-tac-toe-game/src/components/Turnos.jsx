import { Square } from "./Square"


export const Turnos = ({turn, turnos}) => {
  return (
    <section className="turn">
        <Square isSelected={turn === turnos.x}>{turnos.x}</Square>
        <Square isSelected={turn === turnos.o}>{turnos.o}</Square>
    </section>


  )
}
