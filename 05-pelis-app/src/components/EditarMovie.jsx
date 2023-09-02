
export const EditarMovie = ({movie, listMovies, setListMovies, setEditar}) => {

        const handleEditar = (e, id)=> {
                e.preventDefault();
                const {title, desc} = e.target
                const movie_edit = {
                        id,
                        title: title.value.toUpperCase(),
                        desc: desc.value
                }
                setEditar(movie_edit);
                const moviesupdate = listMovies.map(mov => {
                        if(mov.id === id) {
                                return movie_edit
                        } else {
                                return mov
                        }
                });
                localStorage.setItem('movies', JSON.stringify(moviesupdate));
                setListMovies(moviesupdate);
                setEditar(0);
        }

  return (
    <div className="editarMovie text-center">
            <h3>Editar Pelicula</h3>
            <form onSubmit={e => handleEditar(e, movie.id)}>
                <label >Titulo</label>
                <input 
                        type="text" 
                        defaultValue={movie.title} 
                        name='title'
                        />
                <label > Descripción</label>
                <textarea 
                          name="desc" 
                          defaultValue={movie.desc}>

                </textarea>
                <input 
                        type="submit" 
                        value="Guardar" 
                        name='btnSave'/>
            </form>
        </div>
  )
}
