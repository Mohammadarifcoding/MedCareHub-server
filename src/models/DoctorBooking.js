const { Schema, model } = require("mongoose");

const DoctorBooking = new Schema({
    ID: {
        type: String,
        required: true,
    },
    patient: {
        type: String,
        required: true,
    },
    doctor: {
        type: String,
        required: true
    },
    weekDay: {
        type: String,
        required: true
    },
    MeetingId:{
        type:String,
        required:true
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
