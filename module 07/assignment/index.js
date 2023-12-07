const app= require('./app')
const dotenv= require('dotenv')
dotenv.config(("./config.env"))
app.listen(process.env.RUNNING_PORT,(req,res)=>{
    console.log("SERVER IS RUNNING")
})