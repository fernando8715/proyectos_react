import axios from 'axios';
import { createContext, useState, useEffect } from 'react'

const NoticiasContext = createContext();


const NoticiasProvider = ({ children }) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [totalNoticias, setTotalNoticias] = useState(0);
    const [pagina, setPagina] = useState(1);

    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleChangePage = ((e, valor) => {
        setPagina(valor);
    })

    useEffect(() => {

        const key = `ed9ba646888c47f1acc1fea96fae4335`
        const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=${key}`;

        const consultarAPI = async () => {
            const { data } = await axios(url);
            // const datos = data.articles;
            // const cleanNoticias = datos.filter(noticia => noticia.content !== null);
            // const noticias = cleanNoticias.filter(noticia => noticia.content !== '[Removed]');

            setNoticias(data.articles);
            setTotalNoticias(data.totalResults);
            setPagina(1);
        }

        consultarAPI();

    }, [categoria]);

    useEffect(() => {
        const key = `ed9ba646888c47f1acc1fea96fae4335`
        const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&page=${pagina}&apiKey=${key}`;
        const consultarAPI = async () => {
            const { data } = await axios(url);
            // const datos = data.articles;
            // const cleanNoticias = datos.filter(noticia => noticia.content !== null);
            // const noticias = cleanNoticias.filter(noticia => noticia.content !== '[Removed]');
            setNoticias(data.articles);
        }

        consultarAPI()

    }, [pagina]);

    return (
        <NoticiasContext.Provider value={{
            categoria,
            handleChangeCategoria,
            noticias,
            totalNoticias,
            handleChangePage,
            pagina,
        }}>
            {children}
        </NoticiasContext.Provider>
    )
}


export {
    NoticiasProvider
}

export default NoticiasContext
