const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const cron = require('node-cron')
const Crypto = require('./models/Crypto.js');

// Allow cross origin
const cors = require('cors');
const options = {
    origin: '*',
    }
app.use(cors(options));

// Connect to database
const connect = require('./services/database.js');
connect();

app.use(express.json());

app.get("/", (req, res)=> {
    return res.send(`<div>
            <h4>
                Fetch Transactions:
            </h4>
            <a href="https://coinx-assignment-i17f.onrender.com/api/v1/fetchtransactions?address=0xce94e5621a5f7068253c42558c147480f38b5e0d">
                https://coinx-assignment-i17f.onrender.com/api/v1/fetchtransactions?address=0xce94e5621a5f7068253c42558c147480f38b5e0d
            </a>

            <h4>
                Fetch Expenses
            </h4>
            <a href="https://coinx-assignment-i17f.onrender.com/api/v1/fetchexpenses?address=0xce94e5621a5f7068253c42558c147480f38b5e0d">
                https://coinx-assignment-i17f.onrender.com/api/v1/fetchexpenses?address=0xce94e5621a5f7068253c42558c147480f38b5e0d
            </a>
        </div>`)
})

// Server starting on port 3000
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})

// Connect to different api routes
const routes = require('./routes/Route.js');
app.use("/api/v1", routes);

// Function to fetch ethereum price
const fetchEthPrice = async() => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr";
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.ethereum.inr) {
        await Crypto.findOneAndUpdate({name:"Ethereum"}, {name:"Ethereum", value:data.ethereum.inr, timeStamp: Date.now()}, {upsert: true});
    }

}

// Setting up cron job to fetch ethereum prices every 10 minutes
cron.schedule('* * * * *', fetchEthPrice);
