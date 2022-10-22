const express = require("express");
const bodyParser = require("body-parser");
const port = 8080;
import routes from './src/routes/Routes';
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use('/api/v1', routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`[Backend]: Server is running at http://localhost:${port}`);
});
