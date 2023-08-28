import { Navigate, Movie, Search, Agregar } from "./components"


export const App = () => {
  return (
    <>
      <header className="header">
            <div className="header__grid container">
                <div className="header__logo">
                    <img src="../icons8-myspace-69.png" alt="logo app pelis" />
                    <h1 className="header__title">Pelis App</h1>
                </div>
                <Navigate />
            </div>
        </header>
        
        <div className="layout">
          {/* Listado peliculas */}
          <Movie />
          <div className="panel">  
              <Search />
              <Agregar />
          </div>
         </div>
        
        <footer className="footer">
            &copy; Pelis APP
        </footer>

    </>
  )
}
