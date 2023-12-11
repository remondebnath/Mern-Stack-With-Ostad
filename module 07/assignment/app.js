const express= require('express');
const app = express();
const apiRoutes= require('./src/route/api')
app.use('/api', apiRoutes);
// undefinedRoute
app.use('*',(res,req)=>{
    res.statusCode(404).json({status:'fail', data: 'No information'})
})

module.exports= app;