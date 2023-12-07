const express= require('express');
const app = express();
const apiRoutes= require('./route/api')
app.use('/api', apiRoutes);
// undefinedRoute
app.use('*',(res,req)=>{
    res.statusCode(404).send("not Found")
})

module.exports= app;