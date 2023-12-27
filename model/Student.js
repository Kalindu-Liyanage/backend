const mongoose =require('mongoose');

const StudentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
});


const student = mongoose.modelNames('Student',StudentSchema);
module.exports = student;