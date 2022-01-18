
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    // No se usa el const porque no se puede modificar
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (e) => {
    //     //setCategories( [...categories, 'HunterXHunter']); //Así se une lo que había con lo nuevo
    //     setCategories( cats => [...cats, 'HunterXHunter']); //Así también es válido
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr />

            {/* <button onClick= { handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category => {
                        return(
                            // <li key = {category}> { category } </li> //Se usa la categoria en el key por ser más descriptivo
                            <GifGrid 
                                key = {category}
                                category = {category}
                            />
                        )
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;