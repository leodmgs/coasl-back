const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const Sentence = require('../models/sentence')

mongoose.connect('mongodb://localhost/local');

app.use('/', express.static(path.resolve(__dirname, 'assets')))

app.get('/api/create', async (req, res) => {
	const result = await Sentence.create({ record: 'Lorem ipsum' })
	res.json({ status: 'OK' })
});

app.listen(3001, () => {
	console.log(`Server listening on 3001`);
});
