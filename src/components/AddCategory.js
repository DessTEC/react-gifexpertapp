import { PropTypes } from "prop-types";
import { useState } from "react";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    //Así se maneja el input para que sea modificable
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

       
    }

    return(
        //Se puede usar sólo el form sin <> porque se espera regresar un solo elemento, form engloba las cosas
        <form onSubmit={handleSubmit}>
            <input 
                type= "text"
                value={ inputValue }
                onChange= {handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}