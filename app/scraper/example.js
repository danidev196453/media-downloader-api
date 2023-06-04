/*
Created by: @danicoding - https://www.danidev.eu.org
Open jasa:
- Desain website
- Buat script bot WhatsApp
- Buat REST API/Restfull API
- Joki All Rank (Tier) Mobile Legends
Jika minat, silahkan hubungi: 62 895 1254 5999
*/
$print = console.log

const scraper = require("@danicoding/scraper")

const q = "Dani Coding"

if (!q) $print("Params not found!")
scraper.downloader.youtube.playaudio(q)
.then(data => {
  let res = data
  if (!res) $print("Data not found!")
  $print(data)
})
