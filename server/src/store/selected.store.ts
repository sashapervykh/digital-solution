type Selected = {
  set: Set<string>;
  list: string[];
};

const selected: Selected = {
  set: new Set<string>(),
  list: [],
};

export function getSelectedSet() {
  return selected.set;
}

export function getSelectedItems() {
  return selected.list;
}

export function addToSelected(id: string) {
  if (selected.set.has(id)) {
    return;
  }
  selected.set.add(id);
  selected.list.push(id);
}
