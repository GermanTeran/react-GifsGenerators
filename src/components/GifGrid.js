import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ categoria }) => {

    const { data:gifs, loading} = useFetchGifs( categoria );

    return (
        <>
        
            <h2>{ categoria }</h2>     
                
            <div className='imagen-grid'>
                {loading&&<p className='loading'> Cargando... </p>}  
                {
                    gifs.map( ( img ) => {
                        return(
                            <GifGridItem 
                            key= { img.id }
                            { ...img }
                            />
                        )    
                    })
                }   
            </div> 
        </>
    ) 
}
