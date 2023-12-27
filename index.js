const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
require('./DB/Connection')

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is listen on PORT ${PORT}`);
})

const student = require('./routes/Students');
app.use('/student',student)