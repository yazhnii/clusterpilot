const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 👇 Serve static files (IMPORTANT)
app.use(express.static(__dirname));

// 👇 Show UI instead of JSON
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (req, res) => { 
  res.json({ status: "ok" });
});

app.get("/api/data", (req, res) => {
  res.json({
    items: [
      { id: 1, name: "alpha" },
      { id: 2, name: "beta" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});