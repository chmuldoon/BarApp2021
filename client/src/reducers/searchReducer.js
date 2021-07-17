const { FETCH_SEARCH_ITEMS } = require("../actions/types");
const initialState = {
  loading: true,
  cocktails: [],
  ingredients: []
}
export const searchReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case FETCH_SEARCH_ITEMS :
      return {
        ...state,
        loading: false,
        cocktails: payload.data.cocktails,
        ingredients: payload.data.ingredients
      };
  
    default:
      return state;
  }
}

