
const params = new URLSearchParams(window.location.search);
const genre = params.get("genre");



async function gameCategory(genre) {
  try {

    const url = `https://api.rawg.io/api/games?key=ae1fa64719ad429ca20709d15d791c2f&genres=${genre}&ordering=-rating`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Category "${genre}" introuvable (code ${response.status})`);
    }

    const category = await response.json();

     category.results;

    return category.results;

  } catch (error) {
    console.error("Erreur :", error.message);
  }
}

const categoryResult = gameCategory(genre);


for (let i = 0; i < categoryResult.length; i++) {



  const gridGames = document.querySelector("#game-grid");

  const li = document.createElement("li");

  const card = document.createElement("a");
  card.class = "card";
  card.href = `games.html/${categoryResult[i].id}`;

  const cover = document.createElement("div");
  cover.class= "cover";


  const coverLabel = document.createElement("span");
  coverLabel.class = "cover-label";
  coverLabel.textContent = categoryResult[i].name;

  const cardBody = document.createElement("div");
  cardBody.class = "card-body";

  const cardTitle = document.createElement("p");
  cardTitle.class = "card-title";
  cardTitle.textContent = categoryResult[i].name;

  const cardMeta = document.createElement("p");
  cardMeta.class = "card-meta";

  const svg = document.querySelector("svg");
  svg.classList.add("icon i-fill star");

  svg.width = "13";
  svg.height = "13";
  svg.aria - hidden == "true";

  const use = document.createElement("use");
  use.href = "#i-star";

  svg.appendChilduse(use);


  const rating = document.createElement(span);
  rating.textContent = categoryResult[i].rating;
  const span = cocument.createElement("span");
  span.ria - hidden == "true";
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

}

