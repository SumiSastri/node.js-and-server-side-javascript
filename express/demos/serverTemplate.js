const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.send("your <name> app is working");
});

app.listen(PORT, () => console.log(`your <name> app listening on ${PORT}`));
