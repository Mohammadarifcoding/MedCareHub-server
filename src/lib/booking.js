const BookingCollection = require("../models/Booking");
const { ObjectId } = require("mongodb");

const NextPatient = async (req, res) => {
    const id = req.params.id;
    const results = await BookingCollection.find({ DoctorId: new ObjectId(id) }).sort({ createdAt: 'desc' }).exec();
    res.send({ results: results[0] })
}


const UpdatePatientBooking = async (req, res) => {
    try {
        const newData = req.body;

        const { id } = req.params;

        const results = await BookingCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: newData }
        );
        // console.log(result);
        res.send(results)
    } catch (error) {
        console.log(error);
    }
};

const CancelPatient = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await BookingCollection.deleteOne(query);
    res.send(result);
}

module.exports = { NextPatient, UpdatePatientBooking, CancelPatient }
