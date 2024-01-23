import { Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
import { Bebida } from "./Bebida";

export const ListadoBebidas = () => {

    const {listaBebidas} = useBebidas();

  return (
    <Row>
        {listaBebidas.map(b => (
            <Bebida 
                key={b.idDrink} 
                bebida={b}
            />
        ))}
    </Row>
  )
}

