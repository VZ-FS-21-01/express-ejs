const express = require('express')
const PORT = process.env.PORT || 3000
const data = require('./data')
const app = express()

app.use(express.static('public'))

// console.log(data)

app.get('/movies/api', (req, res) => {
    res.json(data)
})

app.get('/movies/api/:year', (req, res) => {
    console.log(req.params.year)
    let filtered = data.filter(movie => movie.year === req.params.year)
    // let filtered = data.filter(movie => {
    //     if (movie.year === "1997") {
    //         return movie
    //     }
    // })
    // console.log(filtered)
    res.json(filtered)
})


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))