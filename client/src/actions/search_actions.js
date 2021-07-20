const axios = require("axios");
const { FETCH_SEARCH_ITEMS, INGREDIENT_ERROR } = require("./types");
export const fetchSearchItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/search")
    dispatch({
      type: FETCH_SEARCH_ITEMS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: INGREDIENT_ERROR
    })
  }
}