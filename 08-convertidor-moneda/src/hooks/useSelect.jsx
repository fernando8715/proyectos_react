import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
    font-family: 'Lato', sans-serif;
    color: #fff;
    display: block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin: 10px;
`
const Select = styled.select`
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 10px;
`

export const useSelect = (label, opciones) => {

    const [state, setState] = useState('');

    const Selector = ()=> (
        <>
            <Label>{label}</Label>
            <Select 
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">-- Selecciona una opcion --</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>
    )
    return [state, Selector]
}
