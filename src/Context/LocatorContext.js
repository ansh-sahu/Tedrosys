import { createContext, useContext, useReducer } from "react";
import LocationReducer from "../Reducer/LoacatorReducer";
const LocationContext = createContext();

const initialState = {
  lng: null,
  lat: null,
  currentlat: null,
  currentlng: null,
  currentCity: null,
  currentState: null,
  currentCountry: null,
  city: null,
  state: null,
  country: null,
  type: 'city'
};
const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LocationReducer, initialState);
  const assignLocation = async (value) => {
    dispatch({
      type: "Location",
      payload: value,
    });
  };

  const assignCurrentLocation = async (value) => {
    dispatch({
      type: "Current Location",
      payload: value,
    });
  }

  const changeType = async (value) => {
    dispatch({
      type: "Type",
      payload: value,
    });
  }

  // console.log(Location);
  return (
    <LocationContext.Provider value={{ location: state, assignLocation, assignCurrentLocation, changeType }}>
      {children}
    </LocationContext.Provider>
  );
};
const useLocationContext = () => {
  return useContext(LocationContext);
};
export { LocationProvider, LocationContext, useLocationContext };
