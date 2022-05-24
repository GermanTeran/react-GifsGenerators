import React from 'react'

export const GifGridItem = (  { id, title, url} ) => {

    return (
        
        <div className='grid-item'>
            
            <img className='grid-imagen' src= { url } alt ={ title }/>  
            <p> {title} </p>

        </div>

    )
}
