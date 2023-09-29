import styled from "@emotion/styled";

const Contenedor = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
    font-family: 'Lato', sans-serif;
    color: #FFF;
    font-weight: 400;
    `
const Info = styled.p`
    font-size: 15px;
`

const Precio = styled.p`
    font-size: 25px;

    span {
        font-weight: 700;
    }
`
const Img = styled.img`
    width: 120px;
    display: block;
`

export const Consulta = ({infoConsulta}) => {
    const {precio, mayorPrecio, menorPrecio, ultimaActualizacion, imagen} = infoConsulta;
  return (
    <Contenedor>
        <Img src={imagen} alt="imagen de criptomoneda" />
        <div>
            <Precio>El precio es de: <span>{precio}</span></Precio>
            <Info>Mayor precio de hoy: <span>{mayorPrecio}</span></Info>
            <Info>Menor precio de hoy: <span>{menorPrecio}</span></Info>
            <Info>Ultima actualizacion: <span>{ultimaActualizacion}</span></Info>
        </div>
    </Contenedor>
  )
}
