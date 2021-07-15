const { INGREDIENT_ERROR, GET_USER_INGREDIENTS } = require("../actions/types");
const initialState = {
  ingredients: [],
  loading: true,
}
export const ingredientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_INGREDIENTS:
      return {
        ...state,
        loading: false,
        ingredients: payload.data
      }
    case INGREDIENT_ERROR:
      return { 
        ...state,
        loading: false,
        ingredients: []
      }
    default:
      return state
  }
}