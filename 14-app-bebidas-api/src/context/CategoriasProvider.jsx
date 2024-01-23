import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([]);

    useEffect(() => {

        const obtenerCategorias = async () => {

            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const {data} = await axios(url);
                setBebidas(data.drinks);
            } catch (error) {
                console.log(error);
            }
        }

        obtenerCategorias()

    }, [])


    return (

        <CategoriasContext.Provider value={{
            bebidas,
        }}>
            {children}
        </CategoriasContext.Provider>
    )
};

export {
    CategoriasProvider,
};

export default CategoriasContext;