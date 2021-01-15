const axios = require('axios')

const searchRecipe = async (ingredients) => {
  if (!ingredients) {
    return { statusCode: 400, body: false }
  }

  if (!Array.isArray(ingredients)) {
    return { statusCode: 400, body: 'Ingredients format is array' }
  }
  if (ingredients.length > 3) {
    return {
      statusCode: 400,
      body: 'Ingredients size length exceed max. (Max 3)'
    }
  }

  try {
    const recipes = await getRecipes(ingredients)

    if (recipes.data.recipes.length > 0) {
      await fetchGifs(recipes.data.recipes)

      return { statusCode: 200, body: recipes.data }
    } else {
      return { statusCode: 200, body: 'No results!' }
    }
  } catch (e) {
    throw new Error('Request fail! Try again later')
  }
}

const searchGiphy = async (title) => {
  if (!title) {
    return { statusCode: 400, body: false }
  }

  if (typeof title !== 'string') {
    return { statusCode: 400, body: 'Only string it is allowed' }
  }
  try {
    const gif = await getGifs(title)

    if (gif.data.length > 0) {
      return { statusCode: 200, body: gif }
    } else {
      return { statusCode: 200, body: 'No results!' }
    }
  } catch (e) {
    throw new Error('Request fail! Try again later')
  }
}

const fetchGifs = async (recipes) => {
  const promises = recipes.map(recipe => {
    return new Promise((resolve, reject) => {
      getGifs(recipe.title).then(gif => {
        recipe.gif = gif.data[0].url
        resolve(recipe)
      })
    })
  })

  return await Promise.all(promises)
}

// axios call
const getRecipes = async (ingredients) => {
  return await axios
    .get(`${process.env.RECIPE_PUPPY_API}?i=${ingredients}`)
    .then((response) => {
      if (response.data.results.length > 0) {
        const resp = {
          data: {
            keywords: ingredients,
            recipes: []
          }
        }
        resp.data.recipes = response.data.results.map((item) => {
          const ingredients = item.ingredients.replace(/\s+/g, '').split(',').sort()
          return {
            title: item.title.replace(/\t|\n|\r/g, ''),
            ingredients: ingredients,
            link: item.href,
            gif: ''
          }
        })

        return resp
      } else {
        return { data: { keywords: ingredients, recipes: [] } }
      }
    })
}

const getGifs = async (title) =>
  await axios
    .get(`${process.env.GIPHY_API}gifs/search?api_key=${process.env.API_KEY}&q=${title}&limit=${process.env.LIMIT}`)
    .then((response) => response.data)

module.exports = { searchRecipe, searchGiphy }
