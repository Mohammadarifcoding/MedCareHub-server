const { Schema, model } = require("mongoose");

const PatientSchema = new Schema({
    patientEmail: {
        type: String,
        required: true,
    },
    ID: {
        type: String,
        required: true,
    },
    patientName: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    Gender: {
        type: String,
        required: true,
    },
    patientIssue: {
        type: String,
        required: true,
    },
    previousTests: {
        type: Array,
        required: true,
    },
    Image: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending"
    }
});

const PatientsCollection = model("Patients", PatientSchema);
module.exports = PatientsCollection;


