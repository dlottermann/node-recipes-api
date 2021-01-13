/* eslint-env jest */
const axios = require('axios')
const recipe = require('../../src/modules')

const data = {
  title: 'Recipe Puppy',
  version: 0.1,
  href: 'http://www.recipepuppy.com/',
  results: [
    {
      title: 'Baked Eggs W/Spinach and Tomatoes',
      href: 'http://www.recipezaar.com/Baked-Eggs-WSpinach-and-Tomatoes-307345',
      ingredients: 'tomato, eggs, garlic, olive oil, spinach',
      thumbnail: 'http://img.recipepuppy.com/120546.jpg'
    },
    {
      title: '\nTomato And Egg Scrambles Recipe\n\n',
      href: 'http://cookeatshare.com/recipes/tomato-and-egg-scrambles-59605',
      ingredients: 'garlic, olive oil, tomato, salt, eggs',
      thumbnail: 'http://img.recipepuppy.com/899539.jpg'
    }
  ]
}

const dataEmpty = {
  title: 'Recipe Puppy',
  version: 0.1,
  href: 'http://www.recipepuppy.com/',
  results: []
}

beforeAll(() => {
  process.env = Object.assign(process.env, {
    RECIPE_PUPPY_API: 'http://www.recipepuppy.com/api/'
  })
})

jest.mock('axios', () => {
  return { get: jest.fn() }
})

describe('Test searchRecipe function', () => {
  test('should return false and statusCode 400 if no ingredients provided', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await recipe.searchRecipe()
    expect(400).toBe(response.statusCode)
    expect(false).toBe(response.body)
  })

  test('should return message and statusCode 400 if ingredients is not array', async () => {
    const ingredients = 'garlic, tomato, rice'
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await recipe.searchRecipe(ingredients)
    expect(400).toBe(response.statusCode)
    expect('Ingredients format is array').toBe(response.body)
  })

  test('should return message and statusCode 400 if number of ingredients exceed', async () => {
    const ingredients = ['garlic', 'tomato', 'rice', 'eggs']
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await recipe.searchRecipe(ingredients)
    expect(400).toBe(response.statusCode)
    expect('Ingredients size length exceed max. (Max 3)').toBe(response.body)
  })

  test('should return statusCode 200 and results exists if request success', async () => {
    const ingredients = ['garlic', 'tomato', 'eggs']

    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await recipe.searchRecipe(ingredients)

    expect(true).toBe(Object.values(response.body.results).length > 0)
    expect(200).toBe(response.statusCode)
  })

  test('should return message empty and statusCode 200 if recipes is empty', async () => {
    const ingredients = ['any', 'another', 'recipe']
    axios.get.mockImplementation(() => Promise.resolve({ data: dataEmpty }))

    const response = await recipe.searchRecipe(ingredients)
    expect(200).toBe(response.statusCode)
    expect('No results!').toEqual(response.body)
  })

  test('should return Exception in case of fail', async () => {
    const ingredients = ['garlic', 'tomato']
    axios.get.mockImplementation(() =>
      Promise.reject(new Error('Request fail! Try again later'))
    )

    await expect(recipe.searchRecipe(ingredients)).rejects.toThrow(Error)
    await expect(recipe.searchRecipe(ingredients)).rejects.toThrow(
      'Request fail! Try again later'
    )
  })
})
