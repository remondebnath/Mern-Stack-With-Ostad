const express= require('express');
const app = express();
const apiRoutes = require('./src/Routes/api');
// API router
app.use('/api', apiRoutes);

module.exports= app;