const express = require("express");
const app = express();
const port = 3000;

const delay = (start) => {
  while (Date.now() - start < 2000);
};

// creating middle ware
app.use((req, res, next) => {
  console.log("Authentication");
  next();
});

// custom middleware
const custom_middleware = (req, res, next) => {
  console.log(Date.now());
  next();
};

// Synchronous route
app.get("/sync", custom_middleware,(req, res) => {
  const start = Date.now();
  delay(start);
  console.log("task completed!");
  res.send("Synchronous response");
});

// Asynchronous route
app.get("/async", async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res.send("Asynchronous response");
});


// start server
app.listen(port, () => {
  console.log(`Server is listening on the [port : ${port}] ....`);
});
