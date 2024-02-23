const { Schema, model } = require("mongoose");

const DoctorBooking = new Schema({
    ID: {
        type: String,
        required: true,
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "PatientsCollection",
        required: true,
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    weekDay: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    patientEmail: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Waiting"
    }

});

const DoctorBookingCollection = model("DoctorBookingCollection", DoctorBooking);
module.exports = DoctorBookingCollection;
