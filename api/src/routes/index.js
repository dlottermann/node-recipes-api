const express = require('express')
const router = express.Router()
const { searchRecipe } = require('./../modules')
const { normalizeQuery } = require('./../utils')

router.get('/', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ body: 'Hello API recipes' }))
  } catch (error) {
    res.status(400).send({ error: 'Error list: ' + error })
  }
})

router.get('/recipes', async (req, res) => {
  try {
    const ingredients = normalizeQuery(req.query.i)
    const response = await searchRecipe(ingredients)
    res.send(response)
  } catch (error) {
    res.status(400).send({ error: 'Error get register: ' + error })
  }
})

module.exports = router
