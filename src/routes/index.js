const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.send('Hello world')
  } catch (error) {
    res.status(400).send({ error: 'Error list: ' + error })
  }
})

router.get('/recipes', async (req, res) => {
  try {
    res.send('Hellor recipes')
  } catch (error) {
    res.status(400).send({ error: 'Error get register: ' + error })
  }
})

module.exports = (app) => app.use('/', router)
