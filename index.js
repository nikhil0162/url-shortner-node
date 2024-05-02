const express = require('express')
const port = 3000

const app = express()

// local module export
const url = require('./routes/url')
const { connectDB } = require('./connection')


// middlewares
app.use(express.json())

// connect DB
connectDB('mongodb://127.0.0.1:27017/url-shortener')

// urls
app.use('/api/url', url)


// server config
app.listen(port, ()=> console.log(`Server Started on port ${port}`))


