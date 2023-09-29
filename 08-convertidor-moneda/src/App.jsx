import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import ImagenCripto from './assets/img/imagen-criptos.png';
import {useState } from 'react';
import { Consulta } from './components/Consulta';
import { Spinner } from './components/Spinner';

const Contenedor = styled.div`
  max-width: 90rem;
  width: 90%;
  margin: 0 auto;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 40rem;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
  
  &::after {
    content: '';
    display:block;
    background-color: #66A2FE;
    width: 10rem;
    height: .5rem;
    margin: 10px auto 0 auto;
    
  }
`

function App() {

  const [infoConsulta, setInfoConsulta] = useState({});
  const [cargando, setCargando] = useState(false);
  
  
  return (
      <Contenedor>
        <Imagen
          src={ImagenCripto}
          alt='imagen de criptomonedas'
        />
        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>
          <Formulario 
            setInfoConsulta={setInfoConsulta} 
            setCargando={setCargando}
          />

          {cargando && <Spinner />}
          {infoConsulta.precio && <Consulta infoConsulta={infoConsulta} /> }
        </div>

      </Contenedor>
  )
}

export default App
