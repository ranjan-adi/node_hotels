const mongoose=require('mongoose')
require('dotenv').config();

// const mongoURL= 'mongodb://localhost:27017/hotels'
const mongoURL=process.env.MONGODB_URL

mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to MongoDB successfully");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB: ", err);
})

// mongoose.connect(mongoURL,{
//     // useNewUrlPareser:true,
//     useUnifiedTopology:true
// })

// const db=mongoose.connection

// db.on('connected',()=>{
//     console.log('Connected to MongoDB');
// });
// db.on('error',(err)=>{
//     console.error('Mongo connection error:',err);
// });
// db.on('disconnected',()=>{
//     console.log('MongoDB disconnected');
// });



// module.exports=db;
