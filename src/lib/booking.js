const { ObjectId } = require("mongodb");
const Reviewdatacollection = require("../models/Review");
const DoctorBookingCollection = require("../models/DoctorBooking");

const getNextPatient = async (id) => {
    const results = await BookingCollection.find({ DoctorId: new ObjectId(id) }).sort({ createdAt: 'desc' }).exec();
    const data = { results: results[0] }
    return data
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
            return res.status(404).send({ message: 'Booking not found' });
        }

        // Update the booking status
        booking.status = status.toLowerCase();
        await booking.save();

        res.send({ message: `Booking status updated to ${status}` });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server Error' });
    }
};

const CancelThePatientData = async (params) => {
    try {
        const { doctorId, patientId } = params;

        // Find and delete the booking for the given doctor and patient
        const deletedBooking = await DoctorBookingCollection.findOneAndDelete({ doctor: doctorId, patient: patientId });

        // If booking not found, return 404
        if (!deletedBooking) {
            return res.status(404).send({ message: 'Booking not found' });
        }

        res.send({ message: 'Booking cancelled successfully', deletedBooking });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Server Error' });
    }
}

module.exports = { getNextPatient, updatePatientBookingdata , CancelThePatientData }
