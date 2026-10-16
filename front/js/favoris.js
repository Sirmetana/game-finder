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

function createFavoris(name, image){
    const cardWrap = document.createElement("li")
    cardWrap.classList.add("card-wrap")
    const card = document.createElement("a")
    card.classList.add("card")
    const cover = document.createElement("div")
    cover.classList.add("cover")
    const coverImg = document.createElement("img")
    coverImg.classList.add("cover__img")
    coverImg.src = image
    coverImg.alt = ""
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const cardTitle = document.createElement('p')
    cardTitle.textContent = name
    cardTitle.classList.add("card-title")
    const cardMeta = document.createElement("p")
    cardMeta.classList.add("card-meta")

    favoritesGrid.appendChild(cardWrap)
    cardWrap.appendChild(card)
    card.append(cover, cardBody)
    cover.appendChild(coverImg)
    cardBody.append(cardTitle, cardMeta)
}