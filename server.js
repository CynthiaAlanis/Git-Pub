const express = require('express');
const app = express();
const methodOverride = require("method-override");
const PORT = 3000;


// -- database
const drink = require('./models/drinks.js');

// body-parser
app.use(express.static('public')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get('/pub', (req, res) => {
	// loop through each drink in the database in order to properly capitalize them all
	for (let drink of drinks) {
		// split name into every separate word
		let splitName = drink.name.split(' ')
		// loop through each individual word
		for (let i = 0; i < splitName.length; i++) {
			// split the word into its individual letters
			let splitWord = splitName[i].split('')
			// uppercase the first letter
			splitWord[0] = splitWord[0].toUpperCase()
			// rejoin the word
			splitName[i] = splitWord.join('')
		}
		// rejoin the words
		drink.name = splitName.join(' ')
	}
	// rendering the index
	res.render('index.ejs', {
		drinks: drinks,
		food: food,
	})
})

//index
app.get("/drinks", (req,res)=>{
res.render('drinks_index.ejs',{
	drink: drink
})
});

//show
app.get('/drinks/:id', (req, res) => {
	res.render('drinks_index.ejs',{
		drink: drink[req.params.id],
	   })
	});





//listener
app.listen(PORT,()=> console.log(`You are listening to port 3000`))