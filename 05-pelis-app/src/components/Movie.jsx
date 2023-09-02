import { useState } from "react";
import { EditarMovie } from "./EditarMovie";

export const Movie = ({listMovies, setListMovies}) => {

  const [editar, setEditar] = useState(0);

  const handleDelete = (id)=> {
    const newList = listMovies.filter(movie => movie.id !== parseInt(id))
    setListMovies(newList);
    localStorage.setItem('movies', JSON.stringify(newList))
  }

  return (
    (listMovies.length > 0)
      ? (listMovies.map(movie => (
        <div key={movie.id} className="movie">
          <div className="movie__content">
            <h3 className="movie__title">{movie.title}</h3>
            <p className="movie__desc">{movie.desc}</p>
            <div className="botones">
              <button className='botones__editar' onClick={ ()=> setEditar(movie.id)}>Editar</button>
              <button 
                      className="delete" 
                      onClick={()=> { handleDelete(movie.id)}}>
                Borrar
              </button>
            </div>
          </div>
          {
            (editar === movie.id) && <EditarMovie 
                                                  movie={movie} 
                                                  listMovies={listMovies}
                                                  setEditar={setEditar}
                                                  setListMovies={setListMovies}/>
          }
        </div>
    )))
      :<h3>No hay peliculas para mostrar</h3>
  )
  
}


