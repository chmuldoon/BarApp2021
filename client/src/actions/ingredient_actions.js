import axios from "axios";
const { INGREDIENT_ERROR, GET_USER_INGREDIENTS } = require("./types");

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