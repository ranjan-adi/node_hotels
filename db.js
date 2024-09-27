const mongoose=require('mongoose')

// const mongoURL= 'mongodb://localhost:27017/hotels'
const mongoURL='mongodb+srv://<db_username>:ranjan123@cluster0.marha.mongodb.net/'

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
