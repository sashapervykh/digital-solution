const INITIAL_AMOUNT = 1_000_000;

const store = {
  items: new Map<string, { id: string }>(),
  selected: new Set(),
};

for (let i = 1; i <= INITIAL_AMOUNT; i++) {
  const id = i.toString();
  store.items.set(id, { id });
}

export function getLeftWindowItems({
  page = 1,
  limit = 20,
  search,
}: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const result = [];
  const offset = (page - 1) * limit;
  const searchStr = search?.trim() ?? "";
  let skipped = 0;

  for (const item of store.items.values()) {
    if (store.selected.has(item.id)) {
      continue;
    }

    const isMatched = searchStr === "" || item.id.includes(searchStr);

    if (isMatched) {
      if (skipped < offset) {
        skipped++;
        continue;
      }

      if (result.length < limit) {
        result.push(item);
      }

      if (result.length === limit) {
        break;
      }
    }
  }

  return {
    items: result,
  };
}

export function addItemToStore(id: string) {
  if (store.items.has(id)) return;
  store.items.set(id, { id });
  return { id };
}
