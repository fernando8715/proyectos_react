import { useEffect, useState } from "react"
import { Navigate, Movie, Search, Agregar } from "./components"
import { initStorage } from "./helpers/initStorage";


export const App = () => {
  
  const init = initStorage();
  const [listMovies, setListMovies] = useState(init);
  
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
          <main className="movies">
            <div className="movies__grid">
            {/* Listado peliculas */}
              <Movie listMovies={listMovies} setListMovies={setListMovies}/>
            </div> 
          </main>
        
          <div className="panel">  
              <Search listMovies={listMovies} setListMovies={setListMovies}/>
              <Agregar setListMovies={setListMovies}/>
          </div>
         </div>
        
        <footer className="footer">
            &copy; Pelis APP
        </footer>

    </>
  )
}
