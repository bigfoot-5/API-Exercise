const mongoose = require("mongoose");

const cilentSchema = new mongoose.Schema({
userid: String,    
productId: String,
productName: String,
quantity: Number,
amount: Number
},
);

const Clients = mongoose.model("Clients", cilentSchema);

module.exports = Clients;