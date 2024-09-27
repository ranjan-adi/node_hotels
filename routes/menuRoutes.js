const express=required('express')
const router=express.Router();
const menu=required('./../models/Menu')

router.post('/',async(req,res)=>{
    try{
        const data=req.body
        const newMenuItem= new MenuItem(data);
        const response=await newMenuItem.save();
        console.log('Menu saved');
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({err:'Internal server error'})
    }
})

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal server error'})
    }
})

model.exports=router;