const mongoose = require('mongoose')

const SentenceSchema = new mongoose.Schema({
    record: { type: String, required: true },
    createdAt: { 
        type: Number,
        default: Date.now()
    },
    evalCount: { type: Number, default: 0 },
}, { collection: 'coasl-stg-sentences' })

const model = mongoose.model('SentenceModel', SentenceSchema)

module.exports = model