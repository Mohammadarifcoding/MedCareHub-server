const { Schema, model } = require("mongoose");

const CartMedicineSchema = new Schema({
    medicineId:{
        type: String,
        required: true,
    },
    email: {  
        type: String,
        required: true,
    },
    medicine: {  
        type: Object,
        required: true,
    },
    OrderId: {  
        type: String,
        required: true,
    },
    quantity: {  
        type: Number,
        required: true,
    }
});

const CartMedicineCollection = model("CartMedicine", CartMedicineSchema);
module.exports = CartMedicineCollection;


