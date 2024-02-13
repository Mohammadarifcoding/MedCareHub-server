const { Schema, model } = require("mongoose");

const MedicineSchema = new Schema({
    ID: {
        type: Number,
        required: true,
    },
    Medname: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    Company: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true
    },
    wishList: {
        type: Boolean
    }
});

const MedicineCollection = model("Medicine", MedicineSchema);
module.exports = MedicineCollection;


