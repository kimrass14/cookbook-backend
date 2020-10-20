const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const authorSchema = new Schema({
    firstName: String,
    lastName: String,
    cookbooks: [
        {ref: 'Cookbook', type: Schema.Types.ObjectId}
    ]
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
