const express  = require('express')
const { connectDB } = require('./config/database')

const app = express()


connectDB().then(()=>{
    console.log("DB connected successfully...")
    app.listen(3000,()=>{
    console.log("Server is running...")
})   
}).catch(err=>{
    console.log("can't connect")
})


app.get("/user",(req, res)=>{
    // logic to DB call
    try{

        throw new Error("error test")
    }
    catch(err){
        res.status(500).send(err.message)
    }

})
