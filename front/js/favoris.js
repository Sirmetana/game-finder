import {getGameById} from "./request_api.js";

const API_URL = "http://localhost:8080/api"
// UUID en dur en attendant #17 (identifiant anonyme côté front)
const USER_ID = "3f2b8c1e-7a4d-4e5f-9b1c-2d3e4f5a6b7c"

const favoritesGrid = document.getElementById("favorites-grid")
const template = document.getElementById("tpl-favorite-card")

async function getFavoris(){
    try {
        const response = await fetch(`${API_URL}/favorites`, {
            headers: {
                "X-User-Id": USER_ID
            }
        })
        const data = await response.json()

        const results = await Promise.allSettled(data.map((favori) => getGameById(favori.gameId)))
        results.filter((result) => result.status === "fulfilled").forEach((result) => {
            createFavoris(result.value.name, result.value.background_image, result.value.id)
        })
    } catch (e) {
        console.error(e)
    }
}

getFavoris()

function createFavoris(name, image, id, date = "16/10/26"){
    const clone = template.content.cloneNode(true)
    const card = clone.querySelector(".card-wrap")
    clone.querySelector(".card-title").textContent = name
    clone.querySelector(".cover__img").src = image
    clone.querySelector(".card-meta time").textContent = date
    clone.querySelector(".card-remove").addEventListener("click", () => deleteFavori(id, card))
    favoritesGrid.appendChild(clone)
}

async function deleteFavori(id, card){
    try {
        await fetch(`${API_URL}/favorites/${id}`, {
            headers: {
                "X-User-Id": USER_ID
            },
            method: "DELETE"
        })
        card.remove()
    } catch (e) {
        console.error(e)
    }
}
