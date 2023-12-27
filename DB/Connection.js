const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const URL= process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on('open',()=>{
    console.log('mongoDB is connected');
})