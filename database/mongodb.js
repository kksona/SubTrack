const mongoose = require('mongoose');
const {DB_URI, NODE_ENV} = require('../config/env');

if(!DB_URI){
    throw new Error("Please provide a DB URI before trying to connect");
}

const connectToDB = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database in ${NODE_ENV} mode`);
    }catch(err){
        console.error(err);
    }
}

module.exports = connectToDB;