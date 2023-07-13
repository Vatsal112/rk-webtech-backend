const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/routes");
require("./db/mongoose.js");
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE,PATCH",
  })
);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use("/v1", routes);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
