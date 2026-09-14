import { Request, Response } from "express";
import { addItem, getLeftItems } from "../services/items.service.js";

export function getItemsHandler(req: Request, res: Response): void {
  const search =
    typeof req.query.search === "string" ? req.query.search : undefined;
  const page = Number(req.query.page) || 1;
  const limit = Math.min(Number(req.query.limit) || 20, 100);

  if (page < 1 || limit <= 0) {
    res.status(400).json({ error: "Invalid pagination parameters" });
    return;
  }

  const result = getLeftItems({ search, page, limit });
  res.json(result);
}

export function addItemHandler(req: Request, res: Response): void {
  const id = typeof req.body.id === "string" ? req.body.id : undefined;

  if (!id) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  const result = addItem(id);

  if (!result) {
    res.status(400).json({ error: `Id ${id} already exists` });
    return;
  }

  res.json(result);
}
