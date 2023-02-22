const languageReducer = (state, action) => {
  
  switch (action.type) {
    case "language":
      localStorage.setItem("language", action.payload);
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
