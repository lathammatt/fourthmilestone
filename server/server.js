'use strict';

const express = require('express')

const app = express()

const port = process.env.PORT || 7575

//middleware
app.use(express.static('client'))

app.get('/api/title', (req, res) => {
  res.json({ title: 'MEAN Chat' })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))