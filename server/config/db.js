const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp3:meuapp3@cluster0.nqou2jh.mongodb.net/properties?retryWrites=true&w=majority';
const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection