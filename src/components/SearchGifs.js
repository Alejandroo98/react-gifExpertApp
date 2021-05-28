import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  //Este useState serviara para editar el "value" del input nada mas.
  const [inputValue, setInputValue] = useState('');

  const handleInutChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //•Esta funcion se ejecutara cuando se presione enter para enviar la busqueda o el "value" del input.
    //•inputValue es la palabra ingesada con el evento onChange en la funcion llamada "handleInutChange", recuedas que la informacion la
    //agregamos por medio de la funcion handleInutChange() y no modificamos su constante directemente.
    //•inputValue.trim() simplemente es para eliminar los espacios en la palabra en caso hayan
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      //• "setCategories" es la funcion del otro setState() proveniente de el archivo llamado GifExpertApp.js, recueda que lo que hace esto
      // es modificar su constante pero por medio de una funcion el parametro que le pasemos a esta fucnion sera su nuevo valor
      //• Lo que hace aqui "setCategories()" es agregale el nuevo valor que fue ingresado por medio del input y mantener los anteriores --> ..cate
      //• "cate" son todas las categorias ingresadas previamente.
      setCategories((cate) => [inputValue, ...cate]);
      //• Nuevamente, recuerda que modificamos el valor de la constante por medio de su funcion "setInputValue()", en este caso lo que hacemos en input
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={inputValue} onChange={handleInutChange} placeholder="Serach Gif..." />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
