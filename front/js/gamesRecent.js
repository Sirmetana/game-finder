
import {getRecentGames } from "./request_api.js";
const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");




let  recentGames =  await getRecentGames();
 recentGames = recentGames.results;

for (let i = 0; i < recentGames.length; i++) {



  const gridGamesRecent = document.querySelector("#recent-track");




  const li = document.createElement("li");

  const card = document.createElement("a");
  card.className = "card";
  card.href = `game.html?id=${[i].id}`;

  const cover = document.createElement("div");
  cover.className= "cover";
   cover.style.backgroundImage = `url("${recentGames[i].background_image}")`;


  const coverLabel = document.createElement("span");
  coverLabel.className = "cover-label";
  coverLabel.textContent = recentGames[i].name;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.textContent = recentGames[i].name;

  const cardMeta = document.createElement("p");
  cardMeta.class = "card-meta";

   const svg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
    );
   svg.setAttribute("class", "icon i-fill star");

   svg.setAttribute("width", "13");
    svg.setAttribute("height", "13");
    svg.hidden = true;

  const use = document.createElement("use");
  use.href = "#i-star";

  svg.appendChild(use);


  const rating = document.createElement("span");
  rating.textContent = recentGames[i].rating;
  const span = document.createElement("span");
  span.hidden = true;
  const released = document.createElement("span");
  released.textContent = recentGames[i].released;

  cardMeta.appendChild(svg);
  cardMeta.appendChild(rating);
  cardMeta.appendChild(released);
  cardMeta.appendChild(span);

  cardBody.appendChild(cardMeta);
  cardBody.appendChild(cardTitle);
  cover.appendChild(coverLabel);

  card.appendChild(cover);
  card.appendChild(cardBody);
  li.appendChild(card);
 gridGamesRecent.appendChild(li);
}
