const { Schema, model } = require("mongoose");

const BookingSchema = new Schema({
    ID: {
        type: Number,
        required: true,
    },
});

const BookingCollection = model("Booking", BookingSchema);
module.exports = BookingCollection;
