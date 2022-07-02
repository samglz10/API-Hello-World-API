const express = require('express')
const languages = express.Router()
const Language = require('../models/language.js')
const languagesSeedData = require('../models/languages_seeds')

// INDEX ROUTE
// Index:
languages.get('/', (req, res) => {
    Language.find()
        .then(foundLanguages => {
            res.json(foundLanguages)
        })
})
// Seeding data over
languages.get('/seed', (req, res) => {
    console.log("seed")
    Language.insertMany(languagesSeedData)
        .then(createdLanguages => {
            res.json(createdLanguages)
        })
})

// Show:
languages.get('/:name', (req, res) => {
    Language.findOne({ name: req.params.name.toLowerCase() })
        .then(foundLanguage => {
            res.json(foundLanguage)
        })
})

module.exports = languages