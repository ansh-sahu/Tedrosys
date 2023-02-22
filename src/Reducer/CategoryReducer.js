const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "categoryId":
      return {
        ...state,
        categoryId: action.payload,
      };
    default:
      return state;
  }
};

export default CategoryReducer;
