import React, { createContext, useContext, useReducer } from "react";
import CategoryReducer from "../Reducer/CategoryReducer";

const CategoryContext = createContext();
const API = process.env.REACT_APP_URL;
const initialState = {
  isLoading: false,
  categoryId: null,
};

const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoryReducer, initialState);
  // console.log(state);

  const getCategoryId = async (value) => {
    console.log(value)
    dispatch({ type: "loading" });
    try {
      dispatch({
        type: "categoryId",
        payload: value,
      });
      dispatch({ type: "loading" });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  return (
    <CategoryContext.Provider value={{ ...state, getCategoryId }}>
      {children}
    </CategoryContext.Provider>
  );
};
const useCategoryContext = () => {
  return useContext(CategoryContext);
};
export { CategoryProvider, CategoryContext, useCategoryContext };
