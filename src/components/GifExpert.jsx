import { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Futbol'])


    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }


    console.log(categories)


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}

            />

            {
                categories.map(category => (
                    <GifGrid key= { category } category = { category } />
                ))
            }
        </>
    )
}
