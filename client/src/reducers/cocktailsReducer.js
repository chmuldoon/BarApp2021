const { COCKTAIL_ERROR, GET_USER_COCKTAILS, GET_COCKTAIL, RESET_COCKTAIL} = require("../actions/types");
const initialState = {
  cocktails: [],
  cocktail_page: null,
  loading: true,
}
export const cocktailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COCKTAIL:
      return {
        ...state,
        cocktail_page: payload,
        loading: false
      }
    case GET_USER_COCKTAILS:
      return {
        ...state,
        loading: false,
        cocktails: payload
      }
    case COCKTAIL_ERROR:
      return { 
        ...state,
        loading: false,
        cocktails: []
      }
    case RESET_COCKTAIL: 
      return {
        ...state,
        loading: false,
        cocktail_page: null
      }
    default:
      return state
  }
}