const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const port = 8080;
const userRoute = require('./src/routes/UserRoute');
const fileRoute = require('./src/routes/FileRoute');

import dotenv from 'dotenv';
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user', userRoute);
app.use('/file', fileRoute);


app.listen(port, () => {
    console.log(`⚡️[Backend]: Server is running at http://localhost:${port}`);
});