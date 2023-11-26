// 1>>>>>>>
// const express = require('express');
// const app = express();
//  app.get('/data', (req, res) => {
//     res.send ("Hello, Express JS!")
//  });
//  app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })
// 2>>>>>>>
// const express = require('express')
// const app =express();
// app.get('/success', (req, res) => {
//     res.status(200).send('Request successful!');
//  });
//  app.get('/notfound', (req, res) => {
//     res.status(404).send('Request unsuccessful!');
//  });
//  app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// 3.>>>>>>>
// const express = require('express')
// const app =express();
// app.get('/home', (req, res) => {
//    res.cookie("name","JohnDoe");
//    res.cookie("language","en");
//    res.cookie("theme","dark");
//    res.send ("Hello, Express JS!")

//  });

//  app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// 4.
const express = require('express');
const app = express();
app.get('/clearcookies', (req, res) => {
    res.clearCookie('name');
    res.send('Specific cookies have been cleared.');
  
 });

 app.listen(3000, () => {
     console.log('Server is running on port 3000');
    })



// app.js

// const express = require('express');
// const app = express();

// // Define a route handler for a GET request to "/clearcookies"
// app.get('/clearcookies', (req, res) => {
//   // Clear specific cookies by name
//   res.clearCookie('cookie1');
//   res.clearCookie('cookie2');

//   // Send a response indicating that the cookies have been cleared
//   res.send('Specific cookies have been cleared.');
// });

// // Start the server on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
