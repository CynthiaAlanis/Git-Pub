const express = require('express')
const app = express()
const port = 3000

// -- database --
const drinks = require('./models/drinks')

// ---static files---
app.use(express.static('public'))

// --------INDEX----------
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

// --------SHOW---------
app.get('/drinks/:id', (req, res) => {
	res.render('drinks_show.ejs', {
		drink: drinks[req.params.id],
	})
})




//----LISTENER----
app.listen(port, () => {
	console.log(`listening to gitpub on port ${port}`)
})