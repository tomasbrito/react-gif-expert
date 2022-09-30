import { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setinputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDefault()
        console.log(inputValue)
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setinputValue('')
    }

    return (
                        //tmb se puede escribir {onSubmit}. Recibe y envia el primer parametro que recibe osea el evento
        <form onSubmit={ (event) => onSubmit(event) } aria-label="form">
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => { onInputChange(event) }}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}