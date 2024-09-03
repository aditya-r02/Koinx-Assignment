const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trime: true
    },
    address: {
        type:String,
        trim: true,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            default: []
        }
    ]
})

module.exports = mongoose.model("User", userSchema);