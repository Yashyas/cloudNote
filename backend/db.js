const mongoose =require('mongoose');
const mongoUri = "mongodb+srv://ym130602:qwer4321@cluster0.mrbrr.mongodb.net/inotebook"

const connectToMongo = async ()=>{
   await mongoose.connect(mongoUri);
        console.log("Connected to Mongo Successfully")
    
}

module.exports = connectToMongo;