const myReducer = (state, action) => {
  // Modify or update store data based on action object
  switch (action.type) {
    case "todo":
      return {
        ...state,
        todo: [...state.todo, action.payload], 
      };
      break;
  }

  return state;
};

export default myReducer;
