import { useState } from 'react'

export const AddCategory = ({onNewCategoryValue}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {
    setInputValue(target.value)    
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newValue = inputValue.trim()
    
    if(newValue.length <= 1) return

    onNewCategoryValue(newValue)
    setInputValue('')
  }

  return (    
    <form onSubmit={ onSubmit }>
      <input 
        type="text" 
        placeholder="Ingresa la categoría" 
        value={ inputValue } 
        onChange={ onInputChange }
      />
    </form>
  )
}
