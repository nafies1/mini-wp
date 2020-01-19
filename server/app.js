if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

// console.log(process.env.NODE_ENV);

const express = require('express')
const app = express()
const routes = require('./routes')

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/mini-wp', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.MONGO_ATLAS, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.set('useCreateIndex', true)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose connected');
});
const cors = require('cors')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/', routes)

app.use((err, req, res, next)=>{
    let status = err.status || 500
    console.log(err);
    if (err.message === "jwt malformed") {
      err.message = 'Token is invalid'; 
      status = 400
    }
    res.status(status).json(err.message)
})

app.listen(process.env.PORT, ()=>{
    console.log('This server is running on port', process.env.PORT);
})