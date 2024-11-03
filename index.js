const express = require('express')
const app = express()
const port = 3000;




app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.get('/projects', (req, res) => {
    res.send('projects')
})

app.get('/about', (req, res) => {
    res.send('about me')
})

app.get('/contact', (req, res) => {
    res.send('contact us')
})

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})


