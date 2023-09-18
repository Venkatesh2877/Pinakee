const express = require("express");
const port = 3000;
const app = express();

app.use(express.urlencoded());

//get request
app.get("/api", function (req, res) {
  res.status(200).json({ message: "Get request executed" });
});

//post request
app.post("/api", (req, res) => {
  const requestData = req.body;

  res.status(200).json({
    message: "Data received successfully through POST",
    data: requestData,
  });
});

//put request
app.put("/api", (req, res) => {
  const requestData = req.body;

  res.status(200).json({
    message: "Data updated successfully through PUT",
    data: requestData,
  });
});

//delete request
app.delete("/api", (req, res) => {
  const requestData = req.body;

  res.status(200).json({ message: "Data deleted successfully through DELETE" });
});

//run the server
app.listen(port, function (err) {
  if (err) {
    console.log("error in setting up the server", err);
  }
  console.log("Server set up done in port", port);
});
