import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {
  const [categories, setCategories] = useState(['Pedro']);
  // const handleAdd = () => {
  /* SOLUCION 1 */
  // setCategories([...categories, 'Perro', 'rata']);
  /* AMBAS HACEN LO MISMO SOLO SON FORMAS DISTINTAS DE PODER HACERLO */
  /* SOLUCION 2 */
  // setCategories((cate) => [...cate, 'Perro']);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />

      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
          // <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
}
