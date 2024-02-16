const { Schema, model } = require("mongoose");

const Order = new Schema({
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  Emergency_Mobile: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Products: {
    type: Array,
    required: true,
  },
});

const OrderCollection = model("Orders", Order);
module.exports = OrderCollection;
