const chackItem = (item) => {
  const itemChack = localStorage.getItem(item);
  if (itemChack) {
    return JSON.parse(itemChack);
  } else {
    return [];
  }
};

const setLocalStr = (id) => {
  const items = chackItem("item");
  const ex = items.find((item) => item === id);

  if (!ex) {
    items.push(id);
    localStorage.setItem("item", JSON.stringify(items));
  }
};

export { chackItem, setLocalStr };
