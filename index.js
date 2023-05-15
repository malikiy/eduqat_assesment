const express = require('express')
const serverless = require('serverless-http');
const mongoose = require("mongoose")
const config = require('./src/config/config')
const app = express()
const bodyParser = require("body-parser");
 
const userRouter = require("./src/router/route");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Server ON')
})
app.use("/api/user", userRouter);

// database connection
mongoose.connect(config.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = mongoose.connection;
  
  db.on("error", (error) => console.log(error));
  db.once("open", async () => {
    console.log("DB Connected");
  });
 
//server start
app.listen(config.port, () => console.log(`server started at PORT ${config.port}`));

module.exports.handler = serverless(app);