const { ObjectId } = require("mongodb");
const Reviewdatacollection = require("../models/Review");
const DoctorBookingCollection = require("../models/DoctorBooking");

const NextPatient = async (req, res) => {
    const id = req.params.id;
    const results = await BookingCollection.find({ DoctorId: new ObjectId(id) }).
        sort({ createdAt: 'desc' }).exec();
    res.send({ results: results[0] })
}



const UpdatePatientBooking = async (req, res) => {
    try {
        const { doctorId, patientId, status } = req.params;

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

const CancelPatient = async (req, res) => {
    try {
        const { doctorId, patientId } = req.params;

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

module.exports = { NextPatient, UpdatePatientBooking, CancelPatient }
