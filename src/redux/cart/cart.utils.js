export const addItemToCart = (itemsInCart, itemToAdd) => {
  const itemExistsInCart = itemsInCart.find((item) => item.id === itemToAdd.id);

  if (itemExistsInCart) {
    return itemsInCart.map((item) =>
      item.id === itemToAdd.id
        ? { ...itemToAdd, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...itemsInCart, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (itemsInCart, itemToRemove) => {
  const itemExistsInCart = itemsInCart.find(
    (item) => item.id === itemToRemove.id
  );
  if (itemExistsInCart.quantity === 1) {
    return itemsInCart.filter((item) => item.id !== itemToRemove.id);
  }
  return itemsInCart.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const ClearItem = (itemsInCart, itemToClear) => {
  const itemExistsInCart = itemsInCart.find(
    (item) => item.id === itemToClear.id
  );

  if (itemExistsInCart) {
    return itemsInCart.filter((item) => item.id !== itemToClear.id);
  }
};
