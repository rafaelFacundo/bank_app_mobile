const api_routes = {
  BASE_URL: "http://192.168.100.103:3333/api/v1",
  CREATE_NEW_USER: "/user/signup",
  MAKE_LOGIN: "/user/login",
  GET_ALL_COUNTRIES: "/countries/all",
  GET_ALL_SUBREGIONS_FROM_COUNTRY: "/subregion/all",
  GET_ALL_CITIES_FROM_COUNTRY: "/city/allByCountry",
  CREATE_NEW_USER_KEY: "/key/create/",
  UPDATE_USER_TRANSFER_KEY: "/key/update/",
  SEARCH_USER_BY_TRANSFER_KEY: "/key/findByKey",
  VERIFY_IF_USER_IS_ACTIVE_BY_ID: "/user/verifyById",
  GET_ADDRESS_BY_USER_ID: "/address/getByUserId",
  GET_COUNTRY_CURRENCY_BY_ID: "/countries/getCurrencyById",
  MAKE_TRANSFER: "/account/transfer/",
  SAVE_TRANSACTION: "/transaction/save/",
};

export default api_routes;
