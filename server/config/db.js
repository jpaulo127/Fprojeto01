const mongoose = require('mongoose')

const db = 'mongodb+srv://meuapp04:meuapp04@cluster0.l27mebe.mongodb.net/properties?retryWrites=true&w=majority';
const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection