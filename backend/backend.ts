const express = require("express");
const bodyParser = require("body-parser");
const port = 8080;
import standardRoute from './src/routes/StandardRoute';
import userRoute from './src/routes/UserRoute';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use('/api/v1', standardRoute)
app.use('/api/v1', userRoute)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`[Backend]: Server is running at http://localhost:${port}`);
});
