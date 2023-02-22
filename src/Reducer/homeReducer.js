const homeReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "homedata":
      return {
        ...state,
        banners: action.payload.banners
          ? action.payload.banners
          : state.banners,
        categories: action.payload.categories
          ? action.payload.categories
          : state.categories,
        serviceType: action.payload.serviceType
          ? action.payload.serviceType
          : state.serviceType,
        trendingCategory: action.payload.trendingCategory
          ? action.payload.trendingCategory
          : state.trendingCategory,
        allBrands: action.payload.allBrands
          ? action.payload.allBrands
          : state.allBrands,
        popularCategory: action.payload.popularCategory
          ? action.payload.popularCategory
          : state.popularCategory,
        homevideo: action.payload.homevideo
          ? action.payload.homevideo
          : state.homevideo,
      };
    default:
      return state;
  }
};

export default homeReducer;
