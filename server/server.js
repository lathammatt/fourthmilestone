'use strict';

const express = require('express')

const app = express()

const port = process.env.PORT || 7575

app.set('port', port)

//middleware
app.use(express.static(//))


app.listen(port, () => console.log("Listening on port: ${port}"))