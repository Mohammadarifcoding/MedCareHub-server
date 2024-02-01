const { Schema, model } = require("mongoose");

const CompanySchema = new Schema({
    ID: {
      type: Number,
      required: true,
    },
    comname: {
      type: String,
      required: true,
    },
    comimage: {
      type: String,
      required: true,
    },
    cominteraction: [
      {
        interaction1: String,
        interaction2: String,
        interaction3: String,
        interaction4: String,
      }
    ], 
    comemail: {
      type: String,
      required: true,
    },
    owneremail: {
      type: String,
      required: true,
    },
  });

const CompanyCollection = model("Company", CompanySchema);
module.exports = CompanyCollection;


