const API_URL = "http://localhost:8080/api"
const USER_ID = "3f2b8c1e-7a4d-4e5f-9b1c-2d3e4f5a6b7c"

export async function getFavoris(){
    try {
        const response = await fetch(`${API_URL}/favorites`, {
            headers: {
                "X-User-Id": USER_ID
            }
        })
        return await response.json()
    } catch (e) {
        console.error(e)
    }
}

export async function removeFavorite(id){
    try {
        await fetch(`${API_URL}/favorites/${id}`, {
            headers: {
                "X-User-Id": USER_ID
            },
            method: "DELETE"
        })
    } catch (e) {
        console.error(e)
    }
}

export async function addFavorite(id){
    try {
        const response = await fetch(`${API_URL}/favorites/${id}`, {
            headers: {
                "X-User-Id": USER_ID
            },
            method: "POST"
        })
        if (!response.ok){
            return false
        }
        return true
    } catch (e) {
        console.error(e)
        return false
    }
}
