const express= require('express');
const app = express();
const apiRoutes= require('./src/route/api')
app.use('/api', apiRoutes);
// undefinedRoute
app.use('*',(res,req)=>{
    res.statusCode(200).json({status:'succcess', data: 'Can contain any information'})
})

module.exports= app;