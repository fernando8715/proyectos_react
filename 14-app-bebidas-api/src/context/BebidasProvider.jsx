import { createContext, useEffect, useState } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {

    const [listaBebidas, setListaBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidaId, setBebidaId] = useState(null);
    const [receta, setReceta] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(()=>{

        setCargando(true)
        const consultarBebida = async () => {

            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
                const { data } = await axios(url);
                console.log(data.drinks[0]);
                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setCargando(false)
            }
        }

        consultarBebida();
    }, [bebidaId])

    const consultarBebidas = async (datos) => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${datos.category}&?i=${datos.ingredient}`
            const { data } = await axios(url);
            setListaBebidas(data.drinks);

        } catch (error) {
            console.log(error);
        }
    }

    const handleModalClick = () => {
        setModal(!modal);
    }

    const handleBebidaIdClick = (id) => {
        setBebidaId(id);
    }


    return (

        <BebidasContext.Provider value={{
            consultarBebidas,
            listaBebidas,
            handleModalClick,
            modal,
            handleBebidaIdClick,
            receta,
            cargando,
            setReceta,
        }}>
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext;