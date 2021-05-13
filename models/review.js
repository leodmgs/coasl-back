const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    data: { type: String, required: true },
    sentenceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    reviewedBy: { type: String },
    createdAt: { 
        type: Number,
        default: () => {
            return Date.now()
        }
    },
}, { collection: 'coasl-stg-reviews' })

const model = mongoose.model('ReviewModel', ReviewSchema)

module.exports = model
