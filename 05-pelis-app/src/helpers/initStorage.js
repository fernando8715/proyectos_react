

export const initStorage = () => {
    if(localStorage.getItem('movies') === null) {
      return localStorage.setItem('movies', JSON.stringify([]));
    } 
    else {
      return JSON.parse(localStorage.getItem('movies'))
    }
}



