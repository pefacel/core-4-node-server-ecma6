import "dotenv/config";
import "./database/connectdb.js";

import express from "express";
import cors from "cors";
import cardRoutes from "./routes/card.js";

const app = express();

const whiteList = ["httep: servidor en vercel"];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("😲😲😲 =>", origin);
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback("Error de CORS origin: " + origin + " No autorizado!");
    },
    credentials: true,
  })
);

app.use(express.json());

// Aquí se muestra cuáles rutas estarán disponibles en el servidor
app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log("🍉🍉🍉 http://localhost:" + PORT));

console.log("Todo OK!");
