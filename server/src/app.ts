import express from "express";
import itemsRouter from "./routes/items.route.js";

const app = express();

app.use(express.json());
app.use("/items", itemsRouter);
export default app;
