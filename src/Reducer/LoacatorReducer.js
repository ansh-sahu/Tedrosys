
const LocationReducer = (state, action) => {

  switch (action.type) {
    case "Location":
      return {
        ...state,
        lng: action.payload.longitude || null,
        lat: action.payload.latitude || null,
        city: action.payload.city || null,
        state: action.payload.state || null,
        country: action.payload.country || null
      };
    case "Current Location":
      localStorage.setItem("Location", JSON.stringify({
        currentlat: action.payload.longitude || null,
        currentlng: action.payload.latitude || null,
        currentCity: action.payload.city || null,
        currentState: action.payload.state || null,
        currentCountry: action.payload.country || null
      }));
      return {
        ...state,
        currentlat: action.payload.longitude || null,
        currentlng: action.payload.latitude || null,
        currentCity: action.payload.city || null,
        currentState: action.payload.state || null,
        currentCountry: action.payload.country || null
      };
    case "Type":
      return {
        ...state,
        type: action.payload
      }
    default:
      return state;
  }
};

export default LocationReducer;