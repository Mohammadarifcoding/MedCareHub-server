const { getNextPatient, updatePatientBookingdata, CancelThePatientData } = require("../lib/booking");

const NextPatient = async (req, res) => {
    const id = req.params.id;
    const result  =  await getNextPatient(id)
    res.send(result)
}


const UpdatePatientBooking = async (req,res)=>{
    const params = req.params;
    const result = await updatePatientBookingdata(params)
    res.send(result)
}


const CancelPatient = async (req,res)=>{
    const params = req.params;
    const result = await CancelThePatientData(params)
    res.send(result)
}

module.exports = { NextPatient, UpdatePatientBooking, CancelPatient }