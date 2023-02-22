import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import homeReducer from "../Reducer/homeReducer";
import { useLanguageContext } from "./languageContext";

const HomeContext = createContext();

const API = process.env.REACT_APP_URL;

const initialState = {
  isLoading: false,
  banners: [],
  categories: [],
  serviceType: [],
  trendingCategory: [],
  allBrands: [],
  popularCategory: [],
  homevideo: "",
};

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);
  // console.log(state);
  const { lang } = useLanguageContext();

  const getHome = async (url) => {
    dispatch({ type: "loading" });
    try {
      const banners = await axios.get(`${url}/getallHomeBanners`);
      
      const categories = await axios.get(
        `${url}/category/get-all-parent-category`
      );
      const serviceType = await axios.get(`${url}/getAllService?lang=${lang}`);
      const trendingCategory = await axios.get(`${url}/TrandingCategories?lang=${lang}`);
      const allBrands = await axios.get(`${url}/allbrandShop?lang=${lang}`);
      const popularCategory = await axios.get(`${url}/popularcategories?lang=${lang}`);
      const homevideo = await axios.get(`${url}/adVideosAll/get`);
      // console.log(banners, categories, serviceType);
      dispatch({
        type: "homedata",
        payload: {
          banners: banners?.data?.banner,
          categories: categories?.data?.data,
          serviceType: serviceType?.data?.services,
          trendingCategory: trendingCategory?.data?.Category,
          allBrands: allBrands?.data?.shop,
          popularCategory: popularCategory?.data?.Category,
          homevideo: homevideo?.data,
        },
      });
      
      dispatch({ type: "loading" });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getHome(API);
  }, [lang]);

  return (
    <HomeContext.Provider value={{ ...state, getHome }}>
      {children}
    </HomeContext.Provider>
  );
};

// custom hooks
const useHomeContext = () => {
  return useContext(HomeContext);
};

export { HomeProvider, HomeContext, useHomeContext };
