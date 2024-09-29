const express=require('express')
const app=express();
const db=require('./db');
// const Person=require('./models/Person')
// const MenuItem=require('./models/Menu')
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT || 3000;


app.get('/',function(req,res){
    res.send("welcome to our hotel")
})


const personRoutes=require('./routes/personsRoutes');
const menuRoutes=require('./routes/menuRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuRoutes);


app.listen(PORT,()=>{
    console.log('listening on port 3000');
})