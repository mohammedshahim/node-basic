const express = require("express");
const app = express();

const postRoute = require("./routes/post");

app.use("/", postRoute);

app.listen(5000, function () {
  console.log("Server is running on port " + 5000);
});
