import Container from "react-bootstrap/Container"
import { Formulario } from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import { ListadoBebidas } from "./components/ListadoBebidas"
import { ModalBebida } from "./components/ModalBebida"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>

        <header>
          <h1>Buscador de bebidas</h1>
        </header>

        <Container>
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>

      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
