const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.get('/', (_request, response) => {
  response.json({ status: 'ok' })
})

// Returns a Pokémon type from PokéAPI. Example: GET /api/type/fire
app.get('/api/type/:idOrName', async (request, response) => {
  const idOrName = encodeURIComponent(request.params.idOrName)

  try {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/type/${idOrName}`)
    const data = await apiResponse.json()

    if (!apiResponse.ok) {
      return response.status(apiResponse.status).json(data)
    }

    return response.json({
      half_damage_to: data.damage_relations.half_damage_to.map((type) => type.name),
      double_damage_from: data.damage_relations.double_damage_from.map((type) => type.name),
    })
  } catch (error) {
    console.error('PokéAPI request failed:', error)
    return response.status(502).json({ error: 'Unable to reach PokéAPI.' })
  }
})

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`)
})
