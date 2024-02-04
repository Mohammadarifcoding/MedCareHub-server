const { Schema, model } = require("mongoose");

const CartMedicineSchema = new Schema({
    email: {  
        type: String,
        required: true,
    },
    medicine: {  
        type: Object,
        required: true,
    },
    medicineId: {  
        type: String,
        required: true,
    },
    ourID: {  
        type: String,
        required: true,
    },
});

const CartMedicineCollection = model("CartMedicine", CartMedicineSchema);
module.exports = CartMedicineCollection;


