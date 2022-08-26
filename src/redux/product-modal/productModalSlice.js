const initialState = {
  value: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET": {
      console.log(action);
      state.value = action.payload;
      return {...state}
    }
    case "REMOVE": {
      state.value = null;
      return {...state}

    }
    default:
      return state;
  }
};

export default reducer;
