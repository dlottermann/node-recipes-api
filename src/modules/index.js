const axios = require('axios')

const searchRecipe = async (ingredients) => {
  if (!ingredients) return { statusCode: 400, body: false }

  if (!Array.isArray(ingredients)) return { statusCode: 400, body: 'Ingredients format is array' }

  if (ingredients.length > 3) return { statusCode: 400, body: 'Ingredients size length exceed max. (Max 3)' }

  try {
    const recipes = await getRecipes(ingredients)

    if (recipes.data.results.length > 0) {
      return { statusCode: 200, body: recipes.data }
    } else {
      return { statusCode: 200, body: 'No results!' }
    }
  } catch (e) {
    throw new Error('Request fail! Try again later')
  }
}

const searchGiphy = () => {
// https://api.giphy.com/v1/gifs/search?api_key=7yu6xRf56djgPMl8zhNYK1QFDK1HUDkt&q=Carrie's Bruschetta Appetizer&limit=1

}

const getRecipes = async (ingredients) => await axios.get(`${process.env.RECIPE_PUPPY_API}?i=${ingredients}`).then(response => response)

module.exports = { searchRecipe, searchGiphy }
