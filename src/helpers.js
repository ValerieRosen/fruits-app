//randomly return selected item from array of items

function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

//remove first matching item form items, if item exists, and returns it.
// Otherwise returns undefined.

function remove(item, items) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { choice, remove };
