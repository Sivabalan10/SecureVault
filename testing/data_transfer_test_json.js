const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json()); // getting json function from express

app.get("/data", (req, res) => {
  res.json({ message: "hello world", status: "success" });
});

app.post("/data", (req, res) => {
  const receivedData = req.body;
  console.log("Data received succesfully");
  res.json({ message: "Data received successfully", data: receivedData });
});

app.listen(PORT, () => {
  console.log(`Server is listening on the port : ${PORT}`);
});
