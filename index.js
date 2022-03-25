const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./routes')
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const MongoDBStore = require('connect-mongodb-session')(session)


app.use(session({
    secret: "sdp",
    name: "SDP",
    saveUninitialized: true,
    resave: true,
    store: new MongoDBStore({
        uri: 'mongodb+srv://t63010040:kritkuea4095@cluster0.jaj57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        databaseName: 'myFirstDatabase',
        collection: 'MySession'
    })
}))

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb+srv://t63010040:kritkuea4095@cluster0.jaj57.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true}).then(()=>{
    console.log('Database connected')
})

app.use('/api', routes)



app.listen(process.env.PORT || 1000,()=>{
    console.log('Started server')
})