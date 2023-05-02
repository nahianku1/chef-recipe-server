let express = require("express");
let cors = require("cors");
let chefdata = require("./data/chefdata.json");
let dotenv = require("dotenv");
dotenv.config();
let app = express();
let port = process.env.PORT || 5000;
let url = process.env.URL || "http://localhost";
app.use(cors());

app.get("/", function (req, res) {
  res.send(chefdata);
});

app.listen(port, () => {
  console.log(`Listening on ${url}:${port}`);
});
