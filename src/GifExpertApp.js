import React, { useState } from 'react';
import { AddCategory } from './components/SearchGifs';
import { GifGrid } from './components/GifGrid';

export default function GifExpertApp() {
  //Por defecto buscara Ecuador, recuerda que toda
  //esta informacio en forma de arreglo se guardara en categories en el useState
  const [categories, setCategories] = useState(['Ecuador']);
  return (
    <>
      <div className="navBar">
        <div>
          <h1>GifExpertApp</h1>
        </div>
        <AddCategory setCategories={setCategories} />
      </div>

      {/* Esto lo que hara es enviarle setCategories para que agerge por medio de un input una nueva categoria y sea buscada */}

      <ol>
        {categories.map((category) => (
          /* Recuerda que  "categories" es un arreglo que contiene todas las categorias ingresadas por lo
           tanto usamos un "map" para buscar a todas las categorias y que por cada una de estas renderize un nuevo coponente*/
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
