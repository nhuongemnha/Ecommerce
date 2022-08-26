const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const initialState = {
  value: items,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addItems": {
      const newItem = action.payload;
      const duplicate = findItem(state.value, newItem);
      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...action.payload,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
      return { ...state };
    }
    case "updateItem": {
      const itemUpdate = action.payload;

      const item = findItem(state.value, itemUpdate);
      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem(
          "cartItems",
          JSON.stringify(sortItems(state.value))
        );
      }
      return { ...state };
    }

    case "removeItem": {
      const item = action.payload;
      state.value = delItem(state.value, item);
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
      return { ...state };
    }

    default:
      return state;
  }
};

const findItem = (arr, item) => {
  return arr.filter(
    (e) =>
      e.slug === item.slug && e.color === item.color && e.size === item.size
  );
};

const delItem = (arr, item) => {
  return arr.filter(
    (e) =>
      e.slug !== item.slug || e.color !== item.color || e.size !== item.size
  );
};

const sortItems = (arr) => {
  return arr.sort((a, b) => {
    return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
  });
};

export default reducer;
