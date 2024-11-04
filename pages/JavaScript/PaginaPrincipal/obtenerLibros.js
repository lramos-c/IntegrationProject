
const obtenerLibrosData = async () => {
  const URLAPI = "https://www.googleapis.com/books/v1/volumes?q=subject:history&maxResults=10&langRestrict=es";
  let listaDeLibros;
  
  try {
    const librosData = await fetch(URLAPI);
    const librosJson = await librosData.json();
    listaDeLibros = librosJson.items
    
    return listaDeLibros;
  } catch(error) {
    console.log(error);
  }
}

export default obtenerLibrosData;