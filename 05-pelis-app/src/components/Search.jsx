import React from 'react'

export const Search = () => {
  return (
    <aside className="search">
        <div className="search__content text-center">
            <h3 >Buscador</h3>
            <form >
                <input type="text" placeholder="Buscar" />
                <button>Buscar</button>
            </form>
        </div>
    </aside>
  )
}
