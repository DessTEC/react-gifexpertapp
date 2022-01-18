// import { useState, useEffect} from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category); //Se renombra de data a images
    
    return(
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            {/* Solo muestra algo cuando está en loading */}
            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                    {
                        images.map( img => {
                            return(
                                <GifGridItem 
                                    key = {img.id}
                                    {... img} //Manda todas las propiedades de img
                                />
                            );
                        })
                    }
            </div>
        </>
    );
}