import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Formulario from './components/Formulario';
import { NoticiasProvider } from './context/NoticiasProvider';
import { ListadoNoticias } from './components/ListadoNoticias';

function App() {


  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align='center' marginY={5} variant='h2' component='h1' >App Noticias</Typography>
        </header>

        <Grid container justifyContent="center" alignItems="center">
          <Grid xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>

        <ListadoNoticias />
    </NoticiasProvider>
  )
}

export default App
