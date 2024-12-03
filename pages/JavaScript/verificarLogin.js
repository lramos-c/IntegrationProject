
export default async function verificarLogin() {
  const URL = "https://fakestoreapi.com/products?limit=2";
  let credencialesUsuario = null;

  await fetch(URL)
  .then(response => response.json())
  .then(data => credencialesUsuario = data)
  .catch(error => console.log(error));
}
