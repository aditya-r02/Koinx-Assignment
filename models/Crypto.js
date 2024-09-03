const mongoose = require('mongoose');

const cryptoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("Crypto", cryptoSchema);