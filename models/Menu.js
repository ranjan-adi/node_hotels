const mongoose = require( 'mongoose')

const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    }
})

const MenuItem=mongoose.model('MenuItem',menuItemSchema)
module.exports=MenuItem;