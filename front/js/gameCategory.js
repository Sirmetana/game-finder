async function gameCategory(category) {
  try {

    const url = `https://api.rawg.io/api/games?key=ae1fa64719ad429ca20709d15d791c2f&genres=${category}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Category "${category}" introuvable (code ${response.status})`);
    }

    const category = await response.json();

    const categoryResult = category.results;

    return categoryResult;

  } catch (error) {
    console.error("Erreur :", error.message);
  }
}

const categoryResult = gameCategory(category);


for (let i = 0; i < categoryResult.length; i++) {

 



}