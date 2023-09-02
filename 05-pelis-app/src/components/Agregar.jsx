import React, { useState } from 'react'
import { saveMovieStorage } from '../helpers/saveMovieStorage';

export const Agregar = ({setListMovies}) => {

  const [movie, setMovie] = useState({});

  const onAddMovie = (e)=> {
    e.preventDefault();
    const {title, desc} = e.target;

    if(title.value.trim().length < 3 || desc.value.trim().length < 3 ) return;

    const newMovie = {
        id: Date.now(),
        title: title.value.toUpperCase(),
        desc: desc.value
      }
      
      setMovie(newMovie);
      saveMovieStorage('movies', newMovie);
      setListMovies( element => {
        return [...element, newMovie]
      });
        title.value = '';
        desc.value = '';
    }

  return (
    <section className="addMovie">
        <div className="addMovie__content text-center">
            <h3>Añadir Pelicula</h3>
            <form onSubmit={onAddMovie}>
                <input 
                        type="text" 
                        placeholder="titulo" 
                        name='title'
                        />
                <textarea 
                          name="desc" 
                          placeholder="Descripción">

                </textarea>
                <input 
                        type="submit" 
                        value="Guardar" 
                        name='btnSave'/>
            </form>
        </div>
    </section>
  )
}
