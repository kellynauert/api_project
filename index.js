let baseURL = "https://pokeapi.co/api/v2/pokemon/";
window.addEventListener("load", nextPokemon);
let button = document.getElementById("numberButton");
button.addEventListener("click", nextPokemon);
let header = document.querySelector("#name");
let image = document.querySelector("#sprite");
let weightDisplay = document.querySelector("#weight");
let statDisplay = document.querySelector("#stats");
let typesDisplay = document.querySelector("#types");

function nextPokemon() {
  let numImput = Math.floor(Math.random() * 100) + 1;
  let URL = baseURL + numImput;

  console.log(numImput);
  fetch(URL)
    .then((response) => response.json())
    .then((json) => displayPokemon(json));
  function displayPokemon(json) {
    console.log(json);
    let name = capitalString(json.species.name);
    header.innerText = name;

    let sprite = json.sprites.front_default;
    image.src = sprite;

    let typesArray = [];
    json.types.forEach((value) => {
      typesArray.push(capitalString(value.type.name));
    });
    typesDisplay.innerText = typesArray.join(" & ") + " Type";

    console.log(typesArray);

    let statsArray = [];
    json.stats.forEach((value) => {
      statsArray.push(capitalString(value.stat.name) + ": " + value.base_stat);
    });
    statDisplay.innerText = statsArray.join("\r\n");

    function capitalString(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
}
