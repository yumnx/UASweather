const express = require("express");
const cors = require("cors");
const cuacaRoutes = require("./routes/cuaca");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/cuaca", cuacaRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Aplikasi Cuaca Backend Berjalan ✔️");
  });
  
