/*
Created by: @danicoding - https://www.danidev.eu.org
Open jasa:
- Desain website
- Buat script bot WhatsApp
- Buat REST API/Restfull API
- Joki All Rank (Tier) Mobile Legends
Jika minat, silahkan hubungi: 62 895 1254 5999
*/
const express = require('express')
const app = express()
const apiRoute = require('./route/api.js')

app.set("json spaces", 2)

app.get('/', function (req, res) {
  res.send('Hello')
})

app.use('/api', apiRoute)

module.exports = app