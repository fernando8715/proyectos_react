import { useState } from "react";
import PropTypes from 'prop-types';


export const Year = ({year}) => {

    const [newYear, setNewYear] = useState(year);

    const handleAddYear = ()=> {
        setNewYear(newYear + 1)
    }

    const handleResYear = ()=> {
        setNewYear(newYear - 1);
    }

    const handleInput = ({target})=> {
        let newDate = parseInt(target.value);
        (Number.isInteger(newDate))
            ? setNewYear(newDate)
            : setNewYear(year);
    }

  return (
    <> 
        <h1>{newYear}</h1>
        <input type="text" onChange={handleInput} />
        <hr />
        <div>
            <button onClick={handleAddYear}>Next year</button>
            &nbsp;
            <button onClick={handleResYear}>Last year</button>
        </div>
    </>
  )
}

Year.propTypes = {
    year: PropTypes.number.isRequired,
}