// import obtenerLibrosData from "./obtenerLibros.js";

// const contenedorContenidoPrincipal = document.querySelector(".container");
// const ulElemento = document.createElement('ul');
// contenedorContenidoPrincipal.appendChild(ulElemento);
    
// const muestraLibrosCards = async () => {
//   const listaDeLibros = await obtenerLibrosData();
//   listaDeLibros.forEach(item => {
//     const liElemento = document.createElement('li');
//     const articleElemento = document.createElement('article');
//     const imgElemento = document.createElement('img');
//     const spanTitulo = document.createElement('span');
//     const spanAutor = document.createElement('span');
//     const divElemento = document.createElement('div');
    
//     imgElemento.src = item.volumeInfo.imageLinks.thumbnail;
//     spanTitulo.textContent = item.volumeInfo.title;
//     spanAutor.textContent = item.volumeInfo.authors[0];

//     ulElemento.appendChild(liElemento);
//     liElemento.appendChild(articleElemento);
//     articleElemento.appendChild(divElemento);
//     divElemento.appendChild(imgElemento);
//     articleElemento.appendChild(spanTitulo);
//     articleElemento.appendChild(spanAutor);
//   });
// }

// document.addEventListener("DOMContentLoaded", muestraLibrosCards);