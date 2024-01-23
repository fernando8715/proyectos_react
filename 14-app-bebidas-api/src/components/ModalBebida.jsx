import { Modal, ModalBody, ModalHeader, ModalTitle, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export const ModalBebida = () => {

  const { handleModalClick, modal, receta, setReceta, cargando } = useBebidas();
  const { strDrink, strDrinkThumb, strInstructions } = receta;

  const mostrarIngredientes = () => {

    let ingredientes = [];

    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={i}>{receta[`strIngredient${i}`]} - {receta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes;
  }

  return (
    !cargando && (<Modal show={modal} onHide={() => {
      handleModalClick();
      setReceta({});
    }}>
      <Image
        src={strDrinkThumb}
        alt={`Imagen de la bebida`}
      />
      <ModalHeader>
        <ModalTitle>{strDrink}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className="p-3">
          <h4>Instrucciones</h4>
          {mostrarIngredientes()}

          <h4 className="mt-3">Preparación</h4>
          <p>{strInstructions}</p>
        </div>
      </ModalBody>
    </Modal>
    )
  )
}
