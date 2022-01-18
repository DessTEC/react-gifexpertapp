// Hook personalizado, es buena práctica empezar el nombre con use
// Funcionan como functional components, son funciones

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //Permite llamar a la función de manera condicional, el segundo argumento es una lista de dependencias, con [] se dispara una vez
    useEffect( () => {
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [ category ]) //Si la categoría cambia, se ejecuta de nuevo

    return state; // {data: [], loading: true}
}