const express = require('express')

const server = express()
const PORT = process.env.PORT || 5000

server.get('/', (req, res) => res.send('API Running'))

server.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`)
})
