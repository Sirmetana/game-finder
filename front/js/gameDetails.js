const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

console.log(gameId);
const url = `https://api.rawg.io/api/games/${gameId}?key=ae1fa64719ad429ca20709d15d791c2f`;


async function giveGameDetails(gameId) {

  try {

    const response = await fetch(url);

    if (!response) {
      throw new Error(`game  introuvable (code ${response.status})`);
    }
    const gameInfo = await response.json();

    return gameInfo;

  }

  catch (error) {
    console.error("Erreur :", error.message);
  }

}


const gameInfo = giveGameDetails(gameId);
const gameContent = document.querySelector("#game-content");

const imgGame = document.createElement("img");
imgGame.src = gameInfo.background_image;

imgGame.class = "hero__img";

const titleGame = document.querySelector(".cover-label");

titleGame.textContent = gameInfo.name;

const titleGameTwo = document.querySelector("#game-title");

titleGameTwo.textContent = gameInfo.name;

const gamereleased = document.querySelector("#game-released");

gamereleased.textContent = gameInfo.released;


const gameDevloper = document.querySelector("#game-developer");
gameDevloper.textContent = gameInfo.developers[0];

const gameRating = document.querySelector("#game-rating");
gameRating.textContent = gameInfo.rating;


const gameGenres = document.querySelector("#game-genres");

const gameGenresResult = gameInfo.genres;

for (let i = 0; i < gameGenresResult.lenght; i++) {

  const genre = document.createElement("span");
  genre.textContent = gameGenresResult[i].name;
  genre.classList.add("badge badge-genre");
  gameGenres.appendChild(genre)

}


const gamesPlatforms = document.querySelector("#game-platforms");

const gamesPlatformsResult = gameInfo.platforms;

for (let j = 0; j < gamesgamesPlatformsResult.lenght; j++) {

  const platform = document.createElement("span");
  platform.textContent = gamesgamesPlatformsResult[i].name;
  platform.lassList.add("badge badge-platform");
  gamesPlatforms.appendChild(platform);

}

const divDescription = document.querySelector("#game-description");
let gameDescription = divDescription.querySelector("p");
gameDescription.textContent = gameInfo.description;