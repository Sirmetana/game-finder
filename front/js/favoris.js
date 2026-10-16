import {getGameById} from "./request_api.js";

const favoritesGrid = document.getElementById("favorites-grid")

async function getFavoris(){
    try {
        const response = await fetch("http://localhost:8080/api/favorites", {
            headers: {
                "X-User-Id": "3f2b8c1e-7a4d-4e5f-9b1c-2d3e4f5a6b7c"
            }
        })
        const data = await response.json()

        const results = await Promise.allSettled(data.map((favori) => getGameById(favori.gameId)))
        results.filter((result) => result.status === "fulfilled").forEach((result) => {
            createFavoris(result.value.name, result.value.background_image)
        })
    } catch (e) {
        console.error(e)
    }
}

getFavoris()
const template = document.getElementById("tpl-favorite-card")

function createFavoris(name, image, date="16/10/26"){
    const clone = template.content.cloneNode(true);
    clone.querySelector(".card-title").textContent = name;
    clone.querySelector(".cover__img").src = image
    clone.querySelector(".card-meta time").textContent = date
    favoritesGrid.appendChild(clone)
}