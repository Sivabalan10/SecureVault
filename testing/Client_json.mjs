import fetch from "node-fetch";

// get
fetch("http://localhost:3000/data")
  .then((res) => res.json())
  .then((data) => console.log(`Data received - ${data.message}`));

// post
fetch("http://localhost:3000/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Sivabalan", age: 21 }),
})
  .then((res) => res.json())
  .then((data) => console.log("Response: ", data));
