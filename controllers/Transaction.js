const Transaction = require("../models/Transaction");
const User = require("../models/User");
const Crypto = require('../models/Crypto');

exports.fetchTransactions = async(req , res) => {
    try{
        const address = req.query.address
        
        const userDetails = await User.findOne({address});
        const tr = userDetails.transactions;

        let transactionList = [];

        for (let i=0; i<tr.length; i++) {
            const t = await Transaction.findById(tr[i]);
            transactionList.push(t);
        }

        return res.status(200).json({
            success: true,
            message: "Transactions list fetched!",
            transactions: transactionList
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "Some error occured"
        })
    }
}

exports.fetchExpenses = async(req, res) => {
    try{
        const address = req.query.address
        
        const userDetails = await User.findOne({address});
        const tr = userDetails.transactions;

        let total = 0;

        for (let i=0; i<tr.length; i++) {
            const t = await Transaction.findById(tr[i]);
            const used = parseInt(t.gasUsed);
            const price = parseInt(t.gasPrice);
            const e = 1e18;
            const val = (used*e)/price;

            total += val;
        }

        let ethPrice = await Crypto.findOne({name:"Ethereum"});
        ethPrice = (ethPrice!==null)?parseInt(ethPrice.value):"Not Available"

        return res.status(200).json({
            success: true,
            message: "Expenses fetched!",
            expenses: total,
            ether_price: ethPrice
        })
    }
    catch(error){
        return res.status(500).json({
            success: false,
            message:"Some error occured"
        })
    }
}