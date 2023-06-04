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
const route = express.Router()
const scraper = require('../scraper')

route.get('/', function (req, res) {
  res.send('Ini API')
})

route.get('/tiktok', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.tiktok(url)
  .then(data => {
    res.json({
      status: "ok",
  	code: 200,
  	data: data
    })
  })
})

route.get('/youtube', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.youtube(url)
  .then(data => {
    res.json({
      status: "ok",
  	code: 200,
  	data: data
    })
  })
})

route.get('/facebook', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.facebook(url)
  .then(data => {
    res.json({
      status: "ok",
  	code: 200,
  	data: data
    })
  })
})

route.get('/instagram', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.instagram(url)
  .then(data => {
    res.json({
      status: "ok",
  	code: 200,
  	data: data
    })
  })
})

route.get('/twitter', function (req, res) {
  let url = req.query.url
  if (!url) return res.json('Enter URL parameters')
  
  scraper.downloader.twitter(url)
  .then(data => {
    res.json({
      status: "ok",
  	code: 200,
  	data: data
    })
  })
})

module.exports = route