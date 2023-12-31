const express= require('express');
const app = express();
const apiRoutes = require('./src/Routes/api');
// API router
app.use('/api', apiRoutes);

// undefinedRoute
app.use('*',(res,req)=>{
    res.statusCode(404).send("not Found")
})

module.exports= app;