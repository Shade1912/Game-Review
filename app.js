const express = require("express")
      mongoose = require("mongoose")

const app = express()

app.get('/', (req,res)=> {
    res.send('Home')
})

app.get('/login', (req,res)=> {
    res.send('Login Page')
})

app.get('/register', (req,res)=> {
    res.send('Register Page')
})

app.listen('3000', err=> {
    console.log(err)
})