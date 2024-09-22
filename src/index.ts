import express from "express";
import cors from "cors";
import router from "./router";
import connectDB from "./db/db";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
