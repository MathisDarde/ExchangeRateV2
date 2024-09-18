async function LoadDevise() {
  const devise = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/EUR`
  );
  let data = await devise.json();
  data = data.conversion_rates;
  Object.keys(data).forEach((devise) => {
    const option_devise = document.createElement("option");
    option_devise.textContent = devise;

    source.appendChild(option_devise);
  });
  Object.keys(data).forEach((devise) => {
    const option_devise = document.createElement("option");
    option_devise.textContent = devise;

    cible.appendChild(option_devise);
  });
}

const API_KEY = "13fb17a204ececd22714c061";

let number = document.getElementById("number");
let resultat = document.getElementById("resultat");

const source = document.getElementById("devise_source");
const cible = document.getElementById("devise_cible");

LoadDevise();
