import { Router } from "express";
import {
  addItemHandler,
  getItemsHandler,
} from "../controllers/items.controller.js";

const router = Router();

router.get("/", getItemsHandler);
router.post("/", addItemHandler);

export default router;
