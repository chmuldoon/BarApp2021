const { INGREDIENT_ERROR, GET_USER_INGREDIENTS, UPDATE_SHELF_ING } = require("../actions/types");
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
    case UPDATE_SHELF_ING:

      const newList = state.ingredients.concat([payload]);
      const newState = {
        ...state,
        ingredients: newList,
        loading: false
      }
      return newState;
    default:
      return state
  }
}