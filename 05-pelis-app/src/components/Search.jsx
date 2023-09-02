import React, { useState } from 'react'

export const Search = ({listMovies, setListMovies}) => {

  const [search, setSearch] = useState('');
  
  const searchMovie = (e)=> {
    setSearch(e.target.value);

    let findPelis = listMovies.filter(mov => {
          return mov.title.toLowerCase().includes(e.target.value.toLocaleLowerCase());
    })
    if (e.target.value.length < 1 || findPelis <= 0) {
      findPelis = JSON.parse(localStorage.getItem('movies'))
    }
    setListMovies(findPelis)
  }
  

  return (
    <aside className="search">
        <div className="search__content text-center">
            <h3 >Buscador</h3>
            <form >
                <input 
                        type="text" 
                        placeholder="Buscar"
                        value={search} 
                        onChange={searchMovie}/>
                <button>Buscar</button>
            </form>
        </div>
    </aside>
  )
}
