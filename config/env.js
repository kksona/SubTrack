require('dotenv').config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

const {PORT, NODE_ENV, DB_URI} = process.env;

module.exports = {PORT, NODE_ENV, DB_URI};