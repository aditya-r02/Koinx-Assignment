const mongoose = require('mongoose');

const TransactionSchmema = new mongoose.Schema({
    blockNumber: {
        type: String,
        trim: true
    },
    blockHash: {
        type: String,
        trim: true
    },
    timeStamp: {
        type: String,
        trim: true
    },
    hash: {
        type: String,
        trim: true
    },
    nonce: {
        type: String,
        trim: true
    },
    transactionIndex:{
        type: String,
        trim: true
    },
    from: {
        type: String,
        trim: true
    },
    to: {
        type: String,
        trim: true
    },
    value: {
        type: String,
        trim: true
    },
    gas: {
        type: String,
        trim: true
    },
    gasPrice: {
        type: String,
        trim: true
    },
    input: {
        type: String,
        trim: true
    },
    methodId: {
        type: String,
        trim: true
    },
    functionName: {
        type: String,
        trim: true
    },
    contractAddress: {
        type: String,
        trim: true
    },
    cumulativeGasUsed:{
        type: String,
        trim: true
    },
    txreceipt_status: {
        type: String,
        trim: true
    },
    gasUsed: {
        type: String,
        trim: true
    },
    confirmations: {
        type: String,
        trim: true
    },
    isError: {
        type: String,
        trim: true
    },
})

module.exports = mongoose.model("Transaction", TransactionSchmema);