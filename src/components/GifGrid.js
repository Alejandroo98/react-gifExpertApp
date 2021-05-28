
import React from 'react'; //rafc
import { useFetchGifs } from '../hooks/useFetchGif';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  // //getGifs() se ejecutrara una sola vez cuando el componente se ejecute por primera vez. Para eso sirve useEffect(())
  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  //   // .then(setImages)     //Esto es lo mismo de arriba pero mas simplificado
  // }, [category]); //Si category cambia si que volvera a ejecutar esata funcion

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

/*================ FIN DE LA SECCION 22/05/2021.  lINK DEL REPO -> https://github.com/Klerith/react-giphy-app/releases/tag/v0.6.0 ================*/
