import { Router } from "express";
import {
  addItemHandler,
  getItemsHandler,
} from "../controllers/items.controller.js";

const selectedRouter = Router();

selectedRouter.get("/", getItemsHandler);
selectedRouter.post("/", addItemHandler);

export default selectedRouter;
