const mongoose = require('mongoose')

// Make a Schema
const logsSchema = new mongoose.Schema({
    title: { type: String, require: true },
    entry: { type: String, required: true },
    shipIsBroken: Boolean
})


// Make a Model from the Schema

const Log = mongoose.model('Log', logsSchema)

// Export the Model for Use in the App

module.exports = Log