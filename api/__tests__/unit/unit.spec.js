/* eslint-env jest */
const axios = require('axios')
const { searchRecipe, searchGiphy } = require('../../src/modules')
const { data, dataEmpty, giphy, giphyEmpty } = require('./../mock')

jest.mock('axios', () => {
  return { get: jest.fn() }
})

describe('Test searchRecipe module', () => {
  test('should return false and statusCode 400 if no ingredients provided', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await searchRecipe()
    expect(400).toBe(response.statusCode)
    expect(false).toBe(response.body)
  })

  test('should return message and statusCode 400 if ingredients is not array', async () => {
    const ingredients = 'garlic, tomato, rice'
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await searchRecipe(ingredients)
    expect(400).toBe(response.statusCode)
    expect('Ingredients format is array').toBe(response.body)
  })

  test('should return message and statusCode 400 if number of ingredients exceed', async () => {
    const ingredients = ['garlic', 'tomato', 'rice', 'eggs']
    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await searchRecipe(ingredients)
    expect(400).toBe(response.statusCode)
    expect('Ingredients size length exceed max. (Max 3)').toBe(response.body)
  })

  test('should return message empty and statusCode 200 if recipes is empty', async () => {
    const ingredients = ['any', 'another', 'recipe']
    axios.get.mockImplementation(() => Promise.resolve({ data: dataEmpty }))

    const response = await searchRecipe(ingredients)
    expect(200).toBe(response.statusCode)
    expect('No results!').toEqual(response.body)
  })

  test('should return Exception in case of fail', async () => {
    const ingredients = ['garlic', 'tomato']
    axios.get.mockImplementation(() =>
      Promise.reject(new Error('Request fail! Try again later'))
    )

    await expect(searchRecipe(ingredients)).rejects.toThrow(Error)
    await expect(searchRecipe(ingredients)).rejects.toThrow(
      'Request fail! Try again later'
    )
  })

  test('should return statusCode 200 and results exists if 1 ingredient is provided', async () => {
    const ingredients = ['tomato']

    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await searchRecipe(ingredients)
    expect(true).toBe(Object.values(response.body.recipes).length > 0)
    expect(200).toBe(response.statusCode)
  })

  test('should return statusCode 200 and results exists if request success', async () => {
    const ingredients = ['garlic', 'tomato', 'eggs']

    axios.get.mockImplementation(() => Promise.resolve({ data }))

    const response = await searchRecipe(ingredients)
    expect(true).toBe(Object.values(response.body.recipes).length > 0)
    expect(200).toBe(response.statusCode)
  })
})

describe('Test searchGiphy module', () => {
  test('should return false and statusCode 400 if no title provided', async () => {
    axios.get.mockImplementation(() => Promise.resolve({}))

    const response = await searchGiphy()
    expect(400).toBe(response.statusCode)
    expect(false).toBe(response.body)
  })
  test('should return false and statusCode 400 if no title string provided', async () => {
    axios.get.mockImplementation(() => Promise.resolve({}))

    const response = await searchGiphy(1)
    expect(400).toBe(response.statusCode)
    expect('Only string it is allowed').toBe(response.body)
  })
  test('should return message empty and statusCode 200 if recipes is empty', async () => {
    const title = 'anyFindserror'
    axios.get.mockImplementation(() => Promise.resolve({ data: giphyEmpty }))

    const response = await searchGiphy(title)
    expect(200).toBe(response.statusCode)
    expect('No results!').toEqual(response.body)
  })

  test('should return Exception in case of fail', async () => {
    const title = 'Greek Omelete'
    axios.get.mockImplementation(() =>
      Promise.reject(new Error('Request fail! Try again later'))
    )

    await expect(searchGiphy(title)).rejects.toThrow(Error)
    await expect(searchGiphy(title)).rejects.toThrow(
      'Request fail! Try again later'
    )
  })
  test('should return statusCode 200 and results exists if request success', async () => {
    const title = 'Greek Omelete'

    axios.get.mockImplementation(() => Promise.resolve({ data: giphy }))

    const response = await searchGiphy(title)
    expect(true).toBe(Object.values(response.body.data).length > 0)
    expect(200).toBe(response.statusCode)
  })
})
