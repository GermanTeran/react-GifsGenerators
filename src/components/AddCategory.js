import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {setCategorias} ) => {

    const [inputValue, setInputValue] = useState('')
    const handdleInputChange = ( e ) => {
        setInputValue(e.target.value)
    }
    const handdleSubmit = e => {
        e.preventDefault(); 
        //HanddleADD
        if(inputValue.trim().length > 2){
            setCategorias( categoria => [inputValue, ...categoria ])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={ handdleSubmit }>
            <input 
            className='input'
            type='text'
            value={ inputValue }
            onChange = { handdleInputChange }
         />
        </form>
        

    )
}

AddCategory.propTypes = {
    
    setCategorias: PropTypes.func.isRequired,
    
}