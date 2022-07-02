//require mongoose: 
const mongoose = require ('mongoose')
const {Schema} = mongoose

//Schema: 
const languageSchema = new Schema ({
    name: {type: String, required: true },
    greeting: String,
    pangram: String, 
    fille: String, 
})

//model and export: 
const Language = mongoose.model('Language', languageSchema)
module.exports = Language

