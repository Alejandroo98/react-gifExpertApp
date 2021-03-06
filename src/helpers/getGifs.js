/* De estos enlaces saque el link y el api_key que necesitaremos para poder utiliar esta api */
// https://developers.giphy.com/docs/api/endpoint/#search ==>  api.giphy.com/v1/gifs/search
//https://developers.giphy.com/dashboard/ ==> fHXyXDuaudwi8K0Cb9MpmJ5ibYWx1QY0

/* === AQUI LO UNICO QUE HACEMOS ES HACER LA PETICION Y YA ESTA === */
export const getGifs = async (category) => {
  //El encodeURI() es para eliminar espacios por ejemplo, bueno nos ayuda aque lo que vamos abuscar este limpio
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=fHXyXDuaudwi8K0Cb9MpmJ5ibYWx1QY0`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id,
        title,
        url,
      };
    }
  );

  return gifs;
};
