const { COCKTAIL_ERROR, GET_USER_COCKTAILS } = require("./types");
const  axios = require("axios");

export const fetchUserCocktails = () => async (dispatch) => {
  const res = await axios.get("/api/cocktails")
  try {
    dispatch({
      type: GET_USER_COCKTAILS,
      payload: res.data.data,
    });
  } catch (err) {
     dispatch({
      type: COCKTAIL_ERROR
    })
  }
}