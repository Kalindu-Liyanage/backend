const router = require('express').Router();
const Student = require('../model/Student');

router.route('/add').post(async(req, res)=>{
    const student = new student(req.body)
    try{
        await student.save()
        res.status(200).json({
            status:'Successfully Student Added',
            data:{
                student
            }
        }) 
    }catch (error){
        res.status(500).json({
            status:'Student added faild',
            message:eror
        })
    }
})

//Display Students Details
router.route('/get').get(async(req, res)=>{
    const student = await Student.find({})
    try{
        res.status(200).json({
            status:'faild',
            data:{
                student
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Success',
            message:err
        })
    }
})

//Display  Student Record by ID
router.route('/get/:id').get(async(req, res)=>{
    const userId = req.params.id;
    const user = await Student.findById(userId).then((student)=>{
        res.status(200).send({status:"Error with Fetch"});
    })
})


//Update student Details
router.route('/update/;id').put(async(req, res)=>{
    const updateStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    try{
        res.status(200).json({
            status:'Success',
            data:{
                updateStudent
            }
        })
    }catch(err){
        console.log(err)
    }
})

// Delete Student Details
router.route('/delete/:id').delete(async(req,res)=>{
    const userId = req.params.id;
    await Student.findByIdAndDelete(userId).then(()=>{
    res.status(200).send({status:"User Details Deleted"});
    }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with Deleting Data"});
    
    })
})


module.exports = router;