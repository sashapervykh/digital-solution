import { getLeftWindowItems } from "../store/store.js";

interface GetItemsParams {
  search?: string;
  page: number;
  limit: number;
}

export function getLeftItems({ search, page, limit }: GetItemsParams) {
  return getLeftWindowItems({ search, page, limit });
}
