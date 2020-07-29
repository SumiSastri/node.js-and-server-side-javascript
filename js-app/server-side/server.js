const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");

const http = require("http").Server(app);
const io = require("socket.io")(http);

const mongoose = require("mongoose");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

// hardcoding data
const messages = [
  { name: "Tim", message: "Hi" },
  { name: "Jane", message: "Hello" },
];

app.get("/", (req, res) => {
  res.send("home route working");
});

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});
const dBurl = process.env.DB_CONNECTION;
mongoose.connect(
  dBurl,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("mongo-db connection working");
    } else {
      console.log("check mongo-db connection", error);
    }
  }
);
mongoose.Promise = global.Promise;

const server = http.listen(port, () =>
  console.log(`js-app server listening at http://localhost:${port}`)
);
