import React from 'react'

export const Movie = () => {
  return (
    <main className="movies">
      <div className="movies__grid">
        <div className="movie">
            <div className="movie__content">
                <h3 className="movie__title">Desarrollo Web</h3>
                <p className="movie__desc">Fernando Ruiz</p>
                <div className="botones">
                    <button className='botones__editar'>Editar</button>
                    <button className="delete">Borrar</button>
                </div>
            </div>
        </div> 
      </div>
    </main>
  )
}


