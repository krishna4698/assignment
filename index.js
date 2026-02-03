import express from "express";
import mongoose from "mongoose"
import authRoutes from "./routes/authRoutes.js"
import authMiddleware from "./middleware/authMiddleware.js"



require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);


app.use(authMiddleware);

app.get("/protected", (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user,
  });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});
