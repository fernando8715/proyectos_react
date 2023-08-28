import React from 'react'

export const Agregar = () => {
  return (
    <section className="addMovie">
        <div className="addMovie__content text-center">
            <h3>Añadir Pelicula</h3>
            <form >
                <input type="text" placeholder="titulo" />
                <textarea name="desc" placeholder="Descripción"></textarea>
                <input type="submit" value="Guardar" />
            </form>
        </div>
    </section>
  )
}
