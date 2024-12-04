
const obtenerLibrosData = async () => {
  const URLAPI = "localhost:8080/api/v1/books/all";
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