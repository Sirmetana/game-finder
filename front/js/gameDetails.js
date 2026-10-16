import { getGameById } from "./request_api.js";

const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

console.log(gameId);


const gameInfo = await  getGameById(gameId);
const gameContent = document.querySelector("#game-content");

const divimageOne= document.querySelector("#game-hero");
divimageOne.style.backgroundImage = `url("${ gameInfo.background_image}")`;

const divimageTwo = document.querySelector("#game-poster");
divimageTwo.style.backgroundImage = `url("${ gameInfo.background_image}")`;

const website = document.querySelector("#website");
website.href = gameInfo.website;

const titleGame = document.querySelector(".cover-label");

titleGame.textContent = gameInfo.name;

const titleGameTwo = document.querySelector("#game-title");

titleGameTwo.textContent = gameInfo.name;

const gamereleased = document.querySelector("#game-released");

gamereleased.textContent = gameInfo.released;



const gameDeveloper = document.querySelector("#game-developer");
gameDeveloper.textContent = gameInfo.developers.name;

const gameRating = document.querySelector("#game-rating");
gameRating.textContent = gameInfo.rating;


const gameGenres = document.querySelector("#game-genres");

const gameGenresResult = gameInfo.genres;

for (let i = 0; i < gameGenresResult.lenght; i++) {

  const genre = document.createElement("span");
  genre.textContent = gameGenresResult[i].name;
  genre.classList.add("badge , badge-genre");
  gameGenres.appendChild(genre)

}


const gamesPlatforms = document.querySelector("#game-platforms");

const gamesPlatformsResult = gameInfo.platforms;

for (let j = 0; j < gamesPlatformsResult.length; j++) {

  const platform = document.createElement("span");
  platform.textContent = gamesPlatformsResult[j].name;
  platform.className = "badge badge-platform";
  gamesPlatforms.appendChild(platform);

}

const divDescription = document.querySelector("#game-description");
let gameDescription = divDescription.querySelector("p");
gameDescription.textContent = gameInfo.description;