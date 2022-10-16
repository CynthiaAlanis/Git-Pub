const express = require('express');
const app = express();
const port = 3000

//Set this 'database' to a variable called drinks in your server.js file
const drinks = require('./models/drinks.js');

app.get('/listen', (req,res) => {
  console.log(req)
res.send('Welcome to the Gitpub App!');
})

app.get('drinks/:id', (req, res) => {
  res.render('show.ejs', { drink: drinks [req.params.id]
  });
});

app.listen(3000, () => {
  console.log(`You are listening on port 3000...`) 
 })