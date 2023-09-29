import { useEffect, useState } from "react";
import {useSelect} from '../hooks'
import styled from "@emotion/styled"
import { Error } from "./Error";
import {monedas} from '../data/monedas';
import { consultarCriptos } from "../helpers/consultarCriptos";
import { cotizar } from "../helpers/consultarInfo";


const InputSubmit = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #9497FF;
    font-weight: 700;
    font-size: 20px;
    color: #FFF;
    text-transform: uppercase;
    transition-property: background-color;
    transition-duration: .3s ease;
    margin-top: 10px;
    
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = ({setInfoConsulta, setCargando}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    // customHook recibe la etiqueta y un array
    const [moneda, SelectMoneda] = useSelect('Ingresa tu moneda', monedas);
    const [cripto, SelectCripto] = useSelect('Ingresa tu criptomoneda', criptos);

    useEffect(()=>{
        const respuesta = async()=>{
          const data = await consultarCriptos();
          setCriptos(data);
        }
        respuesta();
      }, []);

    const handleSubmit = async(e)=>{
        
        e.preventDefault();
        setInfoConsulta({});
        // validar campos diligenciados
        if([moneda, cripto].includes('')) return setError(true);
        
        setCargando(true);
        setError(false);

        // consultar informacion de la API
        const info = await cotizar(moneda, cripto);
        setCargando(false)
        setInfoConsulta(info);
    }

  return (
    <>
        {error && <Error>Todos los campos son obligartorios</Error>}
        <form 
            onSubmit={handleSubmit}
        >
            <SelectMoneda />
            <SelectCripto />

            <InputSubmit 
                type="submit"
                value='Calcular' 
            />
        </form>
    </>
  )
}
