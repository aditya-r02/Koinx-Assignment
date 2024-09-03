const mongoose = require('mongoose');

const cryptoSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true
    },
    timeStamp:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Crypto", cryptoSchema);