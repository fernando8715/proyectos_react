import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event)=> {
        event.preventDefault();
        onAddCategory(inputValue);
        setInputValue('');
    }

    const onInputChange = (event)=> {
        const {target} = event;
        setInputValue(target.value);
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="categoria"
            value={inputValue}
            onChange={onInputChange} />
    </form>
  )
}
