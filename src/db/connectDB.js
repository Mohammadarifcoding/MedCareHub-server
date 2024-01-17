const mongoose = require('mongoose');
require("dotenv").config()

const getConnectionString = () =>{
    let connectionURL ;
    if (process.env.NODE_ENV === 'development') {
        
        connectionURL = process.env.DATABASE_LOCAL;
        connectionURL = connectionURL.replace('<username>',process.env.DATABASE_LOCAL_USERNAME)
        connectionURL = connectionURL.replace('<password>',process.env.DATABASE_LOCAL_PASSWORD)
    }else{
        connectionURL = process.env.DATABASE_PROD
    }

    return connectionURL;
}

const connectDB = async ( ) =>{
    console.log('database connecting.......');
    const monogoURL = getConnectionString()
    await mongoose.connect(monogoURL,{dbName:process.env.DB_NAME});
    console.log('connected to database');
}

module.exports = connectDB