
export default async function agregarUsuarioBD() {
  const URL = "https://fakestoreapi.com/products";
  const nuevoUsuarioObj = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
  }

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(nuevoUsuarioObj)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
}