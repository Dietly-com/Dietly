const express = require('express')
const app = express();
const port = 8080;
const userRoute = require('./src/routes/UserRoute');
const fileRoute = require('./src/routes/FileRoute');

import dotenv from 'dotenv';
dotenv.config();

app.use('/user', userRoute);
app.use('/file', fileRoute);


app.listen(port, () => {
    console.log(`⚡️[Backend]: Server is running at http://localhost:${port}`);
});