const mongoose = require('mongoose');
require("dotenv").config()

const getConnectionString = () => {
    let connectionURL;
    if (process.env.NODE_ENV === 'development') {
        connectionURL = process.env.DATABASE_LOCAL;
        connectionURL = connectionURL.replace('<username>', process.env.DATABASE_LOCAL_USERNAME)
        connectionURL = connectionURL.replace('<password>', process.env.DATABASE_LOCAL_PASSWORD)
    } else {
        connectionURL = process.env.DATABASE_PROD
    }

    return connectionURL;
}

const connectDB = async () => {
    console.log('Connecting....');
    const mongodbUrl = getConnectionString();

    const connectWithRetry = () => {
        return mongoose.connect(mongodbUrl, { dbName: process.env.DB_NAME })
            .catch(err => {
                console.error('Failed to connect to MongoDB. Retrying...');
                return new Promise(resolve => setTimeout(resolve, 5000))
                    .then(() => connectWithRetry());
            });
    };

    await connectWithRetry();

    // console.log('Database connection done');
};

module.exports = connectDB