import { Router } from "express";
import { getItemsHandler } from "../controllers/items.controller.js";

const router = Router();

router.get("/", getItemsHandler);

export default router;
