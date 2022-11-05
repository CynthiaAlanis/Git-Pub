const express = require('express')
const app = express()
const port = 3000

// -- database --
const drinks = require('./models/drinks')
const food = require('./models/food.js')
// ---static files---
app.use(express.static('public'))

// --------DRINK INDEX----------
app.get('/drinks', (req, res) => {
	for (let drink of drinks) {
		let splitName = drink.name.split(' ')
		for (let i = 0; i < splitName.length; i++) {
			let splitWord = splitName[i].split('')
			splitWord[0] = splitWord[0].toUpperCase()
			splitName[i] = splitWord.join('')
		}
		drink.name = splitName.join(' ')
	}
	res.render('drinks_index.ejs', {
		drink: drinks,
	})
})

// --------DRINK SHOW---------
app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', {
		drink: drinks[req.params.id],
	})
})


//--------FOOD INDEX--------
app.get('/food', (req, res) => {
	res.render('food_index.ejs',{
	food:food,
})
})

//---------FOOD SHOW--------
app.get('/food/:id', (req, res) => {
	res.render('food_show.ejs', {
		food: food[req.params.id],
	})
})


//----LISTENER----
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`)
})