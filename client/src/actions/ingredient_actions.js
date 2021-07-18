import axios from "axios";
const { INGREDIENT_ERROR, GET_USER_INGREDIENTS, UPDATE_SHELF_USER, UPDATE_SHELF_ING } = require("./types");

export const fetchMyIngredients = () => async(dispatch) => {
  try {
    const res = await axios.get("/api/ingredients")
     dispatch({
      type: GET_USER_INGREDIENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: INGREDIENT_ERROR
    })
  }
}
export const addIngredientToShelf = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/ingredients/add/${id}`)
      dispatch({
      type: UPDATE_SHELF_ING,
      payload: res.data.data.ingredient
    })

    dispatch({
      type: UPDATE_SHELF_USER,
      payload: res.data.data.ingredient
    });

  

  } catch (error) {
    debugger
     dispatch({
      type: INGREDIENT_ERROR
    })
  }
} 