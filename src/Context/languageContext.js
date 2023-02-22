import { createContext, useContext, useEffect, useReducer } from "react";
import languageReducer from "../Reducer/languageReducer";

const LanguageContext = createContext();
const initialState = {
  lang: localStorage.getItem('language') ? localStorage.getItem('language') : "en",
};
const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(languageReducer, initialState);

  const assignLanguage = async (value) => {
    try {
      dispatch({
        type: "language",
        payload: value,
      });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  return (
    <LanguageContext.Provider value={{ ...state, assignLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// custom hooks
const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export { LanguageProvider, LanguageContext, useLanguageContext };
