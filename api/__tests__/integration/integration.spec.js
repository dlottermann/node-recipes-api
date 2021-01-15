/* eslint-env jest */
const app = require('../../src/main')
const request = require('supertest')
const { responseApi } = require('./../mock')

// Necessary to emulate async tests
jest.setTimeout(30000)

describe('Testing server routes', () => {
  test('GET /recipes?i=', async () => {
    const response = await request(app).get('/recipes?i=')

    expect(response.status).toBe(200)
    expect(response.body.body).toBe(false)
  })

  test('GET /recipes?i=any-param', async () => {
    const response = await request(app).get('/recipes?i=any-param')

    expect(response.status).toBe(200)
    expect(response.body.body).toEqual('No results!')
  })

  test('GET /', async () => {
    const response = await request(app).get('/')

    expect(response.status).toBe(200)
    expect(response.body.body).toEqual('Hello API recipes')
  })

  test('GET /recipes?i=garlic,pork', async () => {
    const response = await request(app).get('/recipes?i=garlic,pork')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(responseApi)
  })
})
