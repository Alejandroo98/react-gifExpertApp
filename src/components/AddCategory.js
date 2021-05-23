import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { GifGrid } from './GifGrid';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInutChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]);
      setInputValue('');
    }

    // console.log('Submit hecho');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={inputValue} onChange={handleInutChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
