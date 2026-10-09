const express = require("express");
const cors = require("cors");
const systemsRouter = require("./routes/systems");
const contentRouter = require("./routes/content");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/systems", systemsRouter);
app.use("/api/content", contentRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Servidor SIAF escuchando en http://localhost:${PORT}`);
});
