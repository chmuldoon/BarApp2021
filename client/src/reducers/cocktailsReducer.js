const { COCKTAIL_ERROR, GET_USER_COCKTAILS} = require("../actions/types");
const initialState = {
  cocktails: [],
  loading: true,
}
export const cocktailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    default:
      return state
  }
}