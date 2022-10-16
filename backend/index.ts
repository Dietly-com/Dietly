const express = require('express')
const app = express();
const port = process.env.PORT as string;
const userRoute = require('./src/routes/UserRoute');

import dotenv from 'dotenv';
dotenv.config();

app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});