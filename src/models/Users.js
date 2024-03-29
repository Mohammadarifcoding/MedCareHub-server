const {
    Schema,
    model
} = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    }
});

const UserCollection = model("User", UserSchema);
module.exports = UserCollection;