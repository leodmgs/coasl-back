const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// Models
const Sentence = require('../models/sentence')
const Review = require('../models/review')

// MongoDB connection -> Mongoose
mongoose.connect('mongodb://localhost/local');

// Settings
app.use('/', express.static(path.resolve(__dirname, 'assets')))
var jsonParser = bodyParser.json()

// Routes
app.get('/api/s/:id', async (req, res) => {
	console.log('id =', req.params.id)
	res.json({ status: 'Queued' })
});

app.post('/api/s/create', jsonParser, async (req, res) => {
	const result = await Sentence.create({
		data: req.body.sentence, 
		weight: req.body.weight // Fibonacci sequence for weight?
	})  
	res.json({ status: 'OK' })
});

app.put('/api/s/update/:id', jsonParser, async (req, res) => {
	const sentence_rec = await Sentence.findOne({ _id: mongoose.Types.ObjectId(req.params.id) })
	if (sentence_rec) {
		const result = await Review.create({
			sentenceId: sentence_rec._id,
			data: req.body.data,
		})
		if (result) {
			const r = await sentence_rec.updateOne({ reviewCount: sentence_rec.reviewCount + 1 })
		}
	} else {
		return res.json({ status: "Error", message: "Sentence not found" })
	}
	res.json({ status: 'OK' })
});

app.get('/api/s/remove/:id', async (req, res) => {
	res.json({ message: 'Not implemented' })
});

// Launch App
app.listen(3001, () => {
	console.log(`Server listening on 3001`);
});
