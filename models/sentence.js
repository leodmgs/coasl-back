const mongoose = require('mongoose')

const SentenceSchema = new mongoose.Schema({
    data: { type: String, required: true },
    createdAt: { 
        type: Number,
        default: () => {
            return Date.now()
        }
    },
    reviewCount: { type: Number, default: 0 },
    weight: { type: Number, required: true },
}, { collection: 'coasl-stg-sentences' })

const model = mongoose.model('SentenceModel', SentenceSchema)

module.exports = model
