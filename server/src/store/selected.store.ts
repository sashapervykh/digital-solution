import { Item } from "../types/types.js";

type Selected = {
  set: Set<string>;
  list: Item[];
};

const selected: Selected = {
  set: new Set<string>(),
  list: [],
};

export function getSelectedSet() {
  return selected.set;
}

export function addToSelected(id: string) {
  if (selected.set.has(id)) {
    return;
  }
  selected.set.add(id);
  selected.list.push(id);
}

export function getSelectedItemsFromStore({
  page = 1,
  limit = 20,
  search = "",
}) {
  const searchStr = search.trim();

  if (!searchStr) {
    const offset = (page - 1) * limit;
    const items = selected.list.slice(offset, offset + limit);

    return {
      items,
    };
  }

  const matchedIds = selected.list.filter(({ id }) => id.includes(searchStr));
  const offset = (page - 1) * limit;
  const items = matchedIds.slice(offset, offset + limit);

  return {
    items,
  };
}
