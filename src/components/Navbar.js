import React, { useState } from 'react';
import { AddCategory } from './SearchGifs';

export const Navbar = () => {
  const [categories, setCategories] = useState(['Ecuador']);
  return (
    <div className="navBar">
      <div>
        <h1>GifExpertApp</h1>
      </div>
      <div>{/* <AddCategory setCategories={setCategories} /> */}</div>
    </div>
  );
};
