const express  = require('express')

const app = express()

app.use('/test',(req,res)=>{
    res.end("Hello, bro")
})




app.listen(3000,()=>{
    console.log("Server is running...")
})

