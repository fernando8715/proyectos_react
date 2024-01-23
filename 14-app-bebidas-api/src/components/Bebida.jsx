import { Col, Card, Button, CardImg, CardTitle, CardBody } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";


export const Bebida = ({ bebida }) => {

    const { idDrink, strDrink, strDrinkThumb } = bebida
    const { handleModalClick, handleBebidaIdClick } = useBebidas();

    return (
        <Col md={6} lg={3} className="mt-5">
            <Card className="mb-4">
                <CardImg
                    variant="top"
                    src={strDrinkThumb}
                    alt={`Imagen de la bebida ${strDrink}`}
                />
                <CardBody>
                    <CardTitle className="mb-4">
                        {strDrink}
                    </CardTitle>
                    <Button
                        variant='warning'
                        className="w-100 text-uppercase fw-bold"
                        type='button'
                        onClick={()=> {
                            handleModalClick()
                            handleBebidaIdClick(idDrink);
                        }}
                    >
                        Ver Receta
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}
