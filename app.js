const express = require('express');
const app = express();
const {PORT} = require('./config/env');

app.get('/', (req, res)=> {
    res.send('Welcome to the subscription tracker');
});

app.listen(PORT , () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

module.exports = app;