
const adminAuth = (req,res,next)=>{
    const token="abc123"
    const isAdminAuthenticated = token ==="abc123"
    if(!isAdminAuthenticated){
        res.status(400).send("Not authorized")
    }
    else{
        next()
    }
}


module.exports = {adminAuth}