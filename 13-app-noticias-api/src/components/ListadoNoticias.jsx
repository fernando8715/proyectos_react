import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Noticia } from './Noticia'
import useNoticias from '../hooks/useNoticias'

export const ListadoNoticias = () => {

    const { noticias, totalNoticias, handleChangePage, pagina } = useNoticias();

    const totalPaginas = Math.ceil(totalNoticias/20)

    return (
        <>
            <Typography variant='h4' component='h3' align='center' marginY={5}>
                Breaking News
            </Typography>

            <Grid container spacing={2}>
                {noticias.map((noticia, index) => (
                    <Noticia
                        key={index}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            <Stack
                spacing={2}
                display={"flex"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                marginY={5}
            >
                <Pagination
                    count={totalPaginas}
                    color="primary"
                    onChange={handleChangePage}
                    page={pagina}
                />
            </Stack>

        </>

    )
}
