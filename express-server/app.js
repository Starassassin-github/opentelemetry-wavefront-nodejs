const tracer = require("./tracing")("hello-world-service");

const PORT = process.env.PORT || "8080";
const express = require("express");
const cors = require("cors");

// You can now use a 'tracer' to do tracing!

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!!!!");
});


const startServer = () => {

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};

startServer();