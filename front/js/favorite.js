import {getGameById} from "./request_api.js";
import {getFavoris, removeFavorite} from "./favorites_api.js";

const favoritesGrid = document.getElementById("favorites-grid")
const template = document.getElementById("tpl-favorite-card")

async function loadFavoris(){
    try {
        const data = await getFavoris()

        const results = await Promise.allSettled(data.map((favori) => getGameById(favori.gameId)))
        results.filter((result) => result.status === "fulfilled").forEach((result) => {
            createFavoris(result.value.name, result.value.background_image, result.value.id)
        })
    } catch (e) {
        console.error(e)
    }
}

function createFavoris(name, image, id, date = "16/10/26"){
    const clone = template.content.cloneNode(true)
    const card = clone.querySelector(".card-wrap")
    clone.querySelector(".card").href = `game.html?id=${id}`
    clone.querySelector(".card-title").textContent = name
    clone.querySelector(".cover__img").src = image
    clone.querySelector(".card-meta time").textContent = date
    clone.querySelector(".card-remove").addEventListener("click", async () => {
        await removeFavorite(id)
        card.remove()
    })
    favoritesGrid.appendChild(clone)
}

loadFavoris()
