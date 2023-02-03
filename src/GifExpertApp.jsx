import { useState } from 'react'

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Cat'])

  const addCategory = (newCategory) => {
    if (!categories.map(item => item.toLowerCase()).includes(newCategory.toLowerCase()))
      setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategoryValue={value => addCategory(value)}
      />

      {categories.map(category => (
        <GifGrid
          key={category}
          category={category} />
      ))
      }
    </>
  )
}
