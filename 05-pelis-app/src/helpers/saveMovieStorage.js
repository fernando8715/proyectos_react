
export const saveMovieStorage = (key, element) => {

    const listMovies = JSON.parse(localStorage.getItem(key));

    
    if(Array.isArray(listMovies)){
        listMovies.push(element);
        localStorage.setItem(key, JSON.stringify(listMovies));
    } else {
        localStorage.setItem(key, JSON.stringify([element]));
    }

    return element
}
