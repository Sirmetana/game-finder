import {getGamesByName, getGameById} from "./request_api.js";

const url = window.location.search;
const gameName = new URLSearchParams(url).get("name");
const searchResultsObject =  await getGamesByName(gameName);
const searchResultsList = searchResultsObject.results;
console.log(searchResultsList);

searchResultsList.forEach(game => {
    const cardListElement = document.createElement("li");
    const cardLink = document.createElement("a");
    const cardCoverImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardMeta = document.createElement("p");
    const cardRating = document.createElement("svg");
    const cardRatingStar = document.createElement("use");
    const cardRatingSpan = document.createElement("span");
    const cardRatingPoint = document.createElement("span");
    const cardDate = document.createElement("span");

    cardListElement.classList.add("game-card");
    cardLink.classList.add("card");
    cardCoverImage.classList.add("cover");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardMeta.classList.add("card-meta");
    cardRating.classList.add("icon");
    cardRating.classList.add("i-fill");
    cardRating.classList.add("star");
    cardRatingSpan.classList.add("card-rating");
    cardDate.classList.add("card-date");

    cardRating.width=13;
    cardRating.height=13;
    cardRatingSpan.textContent= game.rating;
    cardRatingPoint.ariaHidden = "true";
    cardRatingPoint.textContent = "·";
    cardRatingPoint.ariaHidden="true";
    cardRatingStar.href = "#i-star";

    cardTitle.textContent = game.name ?? "";
    cardCoverImage.src = game.background_image ?? "";
    const splitUrl = window.location.search.toString().split("/");
    splitUrl.pop();
    cardLink.href = "game.html/" + game.id;      //splitUrl.join("/").toString() + "/games/" + game.id;
    cardDate.textContent = new Date(game.released).getFullYear();

    cardRating.appendChild(cardMeta);
    cardRating.appendChild(cardRatingStar);
    cardRating.appendChild(cardRatingSpan);
    cardRating.appendChild(cardRatingPoint);
    cardRating.appendChild(cardDate);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardMeta);
    cardBody.appendChild(cardRating);

    cardListElement.appendChild(cardLink);
    cardListElement.appendChild(cardCoverImage);
    cardListElement.appendChild(cardBody);

    document.querySelector("#game-list").appendChild(cardListElement);
});

