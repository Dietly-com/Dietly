const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const port = 8080;

const userRoute = require('./src/routes/UserRoute');
const fileRoute = require('./src/routes/FileRoute');
const badgeRoute = require('./src/routes/BadgeRoute');
const personalBestRoute = require('./src/routes/PersonalBestRoute');
const userBadgeRoute = require('./src/routes/UserBadgeRoute');
const userMealProductRoute = require('./src/routes/UserMealProductRoute');
const userMealRoute = require('./src/routes/UserMealRoute');
const userPersonalBestRoute = require('./src/routes/UserPersonalBestRoute');

import dotenv from 'dotenv';
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/user', userRoute);
app.use('/file', fileRoute);
app.use('/user', badgeRoute);
app.use('/personalBest', personalBestRoute);
app.use('/userBadge', userBadgeRoute);
app.use('/userMealProduct', userMealProductRoute);
app.use('/userMeal', userMealRoute);
app.use('/userPersonalBest', userPersonalBestRoute);


app.listen(port, () => {
    console.log(`⚡️[Backend]: Server is running at http://localhost:${port}`);
});