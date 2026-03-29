const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "ClusterPilot API" });
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
