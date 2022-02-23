let items = [];
function addToCart(item: string, qty?: number) {
  if(qty !== undefined)
    return items.concat({item, qty});
  return items;
}

items = addToCart("Saberlight", 2);
console.log(items);