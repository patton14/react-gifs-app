import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Breaking Bad'])

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Playas']); -> una forma, con los ... traemos "todo", y agregamos
    //     setCategories(cate => [...categories, 'GOT']) // otra forma
    // }
 
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {
                categories.map(category => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
            
        </> 
    ); 
}

// categories.map(category => (
//     <li key={category}>{category}</li>
// )) //con esto me traia la lista de AddCategory.js


export default GifExpertApp;


