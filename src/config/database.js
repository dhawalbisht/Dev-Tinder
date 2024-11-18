const mongoose =  require('mongoose')

const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://dhawal:Dhawal%4077045pp03@cluster0.yqlqr.mongodb.net/DevTinder")
}

module.exports = {connectDB}