const express=required('express')
const router=express.Router();
// const { model } = require('mongoose');
const Person=require('./../models/Person')



router.post('/',async(req,res)=>{
    try{
        const data=req.body//body parser user's data lake de rha hai

        const newPerson=new Person(data);//ek newPerson bana ke 'data' usme daal diya

        const response=await newPerson.save();//wait krne ke baad save krna hai
        console.log('data saved')//asyn ,await callback ki tarah hi kaam kar rhe h ki wo wait
        res.status(200).json(response);//karega ki response sahi ane tk wait otherwise throw error
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data)//.json(data)==send(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
});

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response=await Person.find({work:workType})
            console.log('data fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({error:'Invalid workType'});
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})

router.put('./:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updateddata=req.body;

        const response=await Person.findByIdAndUpdate(personId,updateddata,{
            new:true,
            runValidators:true
        })
        if(!response){//agar given id milti hi nhi hai to
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated')
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'});
    }
})

router.delete('./id',async(req,res)=>{
    try{
        const person=req.params.id;
        const response=await Person.findByIdAndDelete(preson);
        if(!response){
            return res.status(404).json({err:'Person not found'})
        }
        console.log('data deleted');
        res.status(200).json({message:'Person deleted successfully'})
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server error'})
    }
})

model.exports=router;