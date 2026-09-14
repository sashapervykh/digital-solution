import { Router } from "express";
import {
  addItemHandler,
  getItemsHandler,
} from "../controllers/items.controller.js";

const itemsRouter = Router();

itemsRouter.get("/", getItemsHandler);
itemsRouter.post("/", addItemHandler);

export default itemsRouter;
