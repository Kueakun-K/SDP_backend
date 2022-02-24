const express = require('express')
const app = express()
const routes = require('./routes')
const mongoose = require("mongoose")
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://t63010040:kritkuea4095@cluster0.jaj57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('Database connected')
})

app.use('/api', routes)


app.listen(1000,()=>{
    console.log('Started server')
})