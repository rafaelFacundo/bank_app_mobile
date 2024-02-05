const api_routes = {
  BASE_URL: "http://192.168.100.104:3333/api/v1",
  CREATE_NEW_USER: "/user/signup",
  MAKE_LOGIN: "/user/login",
  GET_ALL_COUNTRIES: "/countries/all",
  GET_ALL_SUBREGIONS_FROM_COUNTRY: "/subregion/all",
  GET_ALL_CITIES_FROM_COUNTRY: "/city/allByCountry",
};

export default api_routes;
