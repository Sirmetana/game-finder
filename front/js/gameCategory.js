import { getGamesByCategory } from "./request_api.js";
const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");




let  categoryResult =  await getGamesByCategory(genre);
 categoryResult = categoryResult.results;

  const gridGames = document.querySelector("#game-grid");


  const genreTittle = document.querySelector("#category-breadcrumb");
  genreTittle.textContent = genre.toUpperCase(); 
  const categoryTitle = document.querySelector("#category-title");
  categoryTitle.textContent = genre.toUpperCase(); 

  switch (genre)
    {
        case "role-playing-game-rpg":
            document.querySelector("#rpg").setAttribute("aria-current", "page");
            break;

        case "action":
            document.querySelector("#action").setAttribute("aria-current", "page");
            break;
            
              case "indie":
            document.querySelector("#inde").setAttribute("aria-current", "page");
            break;

              case "adventure":
            document.querySelector("#aventure").setAttribute("aria-current", "page");
            break;

              case "strategy":
            document.querySelector("#strategie").setAttribute("aria-current", "page");
            break;

              case "shooter":
            document.querySelector("#shooter").setAttribute("aria-current", "page");
            break;


              case "racing":
            document.querySelector("#course").setAttribute("aria-current", "page");
            break;

              case "puzzle":
            document.querySelector("#puzzle").setAttribute("aria-current", "page");
            break;

             case "platformer":
            document.querySelector("#platforme").setAttribute("aria-current", "page");
            break;
  

    }
for (let i = 0; i < categoryResult.length; i++) {

 
  
  const li = document.createElement("li");

  const card = document.createElement("a");
  card.className = "card";
  card.href = `game.html?id=${categoryResult[i].id}`;

  const cover = document.createElement("div");
  cover.className= "cover";
   cover.style.backgroundImage = `url("${categoryResult[i].background_image}")`;


  const coverLabel = document.createElement("span");
  coverLabel.className = "cover-label";
  coverLabel.textContent = categoryResult[i].name;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  cardTitle.textContent = categoryResult[i].name;

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
  rating.textContent = categoryResult[i].rating;
  rating.className = "espace";
  const span = document.createElement("span");
  span.hidden = true;
  const released = document.createElement("span");
  released.textContent = categoryResult[i].released;

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
  gridGames.appendChild(li);

}

