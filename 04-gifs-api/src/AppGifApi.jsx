import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const AppGifApi = () => {

  const [categorias, setCategorias] = useState(['dragon', 'power']);

  const url = `https://api.giphy.com/v1/gifs/search?api_key=fzPu5j87bPh69UmqUwjCLCVGDpZOW5Uu&q=dragon&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

  const heroes = async()=> {
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    return data
    // console.log(data.data[0].id);
    // console.log(data.data[0].images.fixed_height_small.url);
    // console.log(data.data[0].user.display_name);
  }

  const onAddCategory = (value)=> {
    setCategorias([...categorias, value]);
  }

  return (
    <>
      <h1>Giff Api</h1>
      <AddCategory onAddCategory={onAddCategory}/>

      <ul>
        {
          categorias.map( (categoria, index) => (
            <li key={index}>{categoria}</li>
          ) )
        }
      </ul>
    </>
  )
}
