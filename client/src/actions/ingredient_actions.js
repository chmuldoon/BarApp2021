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
      payload: {  
        ingredient: res.data.data.ingredient,
        remove: false
      }
    })

    dispatch({
      type: UPDATE_SHELF_USER,
      payload: {  
        ingredient: res.data.data.ingredient,
        remove: false
      }
    });

  } catch (error) {
     dispatch({
      type: INGREDIENT_ERROR
    })
  }
} 
export const removeIngredientFromShelf = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/ingredients/remove/${id}`)
    dispatch({
      type: UPDATE_SHELF_ING,
      payload: {  
        ingredient: res.data.data.ingredient,
        remove: true
       }
    })

    dispatch({
      type: UPDATE_SHELF_USER,
      payload: {  
        ingredient: res.data.data.ingredient,
        remove: true
      }
    });

  } catch (error) {
     dispatch({
      type: INGREDIENT_ERROR
    })
  }
} 