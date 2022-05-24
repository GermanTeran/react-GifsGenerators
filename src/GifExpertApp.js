import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One piece'])

    return(
        <>
        <h1>Gif Expert App</h1>
        <AddCategory setCategorias = { setCategorias } />
        
        <main className='contenido-principal'>
        {
            categorias.map( categoria => <GifGrid key={categoria} categoria = { categoria } />)
        }
        </main>
        </>
    )
}