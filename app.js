const express = require('express');
const app = express();
const {PORT} = require('./config/env');
const userRouter = require('./routes/user.routes');
const authRouter = require('./routes/auth.routes');
const subscriptionRouter = require('./routes/subscription.routes');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res)=> {
    res.send('Welcome to the subscription tracker');
});

app.listen(PORT , () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

module.exports = app;