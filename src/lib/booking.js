const { ObjectId } = require("mongodb");
const Reviewdatacollection = require("../models/Review");
const DoctorBookingCollection = require("../models/DoctorBooking");

const getNextPatient = async (id) => {
    const results = await DoctorBookingCollection.find({ ID: id }).sort({ createdAt: 'desc' }).exec();
    const data = { results: results.length > 0 ? results[0] : null }; // Check if results is not empty
    return data;
}


const updatePatientBookingdata = async (params) => {
    try {
        const { doctorId, patientId, status } = params;

        // Validate status
        const validStatuses = ['pending', 'accepted', 'completed'];
        if (!validStatuses.includes(status.toLowerCase())) {
            return res.status(400).send({ message: 'Invalid status' });
        }

        // Find the booking for the given doctor and patient
        const booking = await DoctorBookingCollection.findOne({ doctor: doctorId, patient: patientId });

        // If booking not found, return 404
        if (!booking) {
            return { message: 'Booking not found' }
        }

        // Update the booking status
        booking.status = status.toLowerCase();
        await booking.save();

        return ({ message: `Booking status updated to ${status}` });
    } 
    catch (error) {
        console.error(error);
        return { message: 'Server Error' }
    }
};

const CancelThePatientData = async (params) => {
    try {
        const { doctorId, patientId } = params;

        // Find and delete the booking for the given doctor and patient
        const deletedBooking = await DoctorBookingCollection.findOneAndDelete({ doctor: new ObjectId(doctorId), patient: new ObjectId(patientId)  });

        // If booking not found, return 404
        if (!deletedBooking) {
            return { message: 'Booking not found' }
        }

        return { message: 'Booking cancelled successfully', deletedBooking }
    } catch (error) {
        console.error(error);
        return { message: 'Server Error' }
    }
}

module.exports = { getNextPatient, updatePatientBookingdata , CancelThePatientData }
