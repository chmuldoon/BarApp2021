const { COCKTAIL_ERROR, GET_USER_COCKTAILS, GET_COCKTAIL, RESET_COCKTAIL } = require("./types");
const  axios = require("axios");
export const fetchCocktail = (id) => async (dispatch) => {
  const res = await axios.get(`/api/cocktails/${id}`)
  try {
    dispatch({
      type: GET_COCKTAIL,
      payload: res.data.data
    })
      
  } catch (err) {
     dispatch({
      type: COCKTAIL_ERROR
    })
  }
}
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
export const formCocktailUrl = (cocktail) => {
  if(cocktail.userMade){
    return cocktail.photo
  }else{
    return `https://www.thecocktaildb.com/images/media/drink/${cocktail.photo}`;
  }
}
export const resetCocktail = () => async (dispatch) => {
  try{
    dispatch({
      type: RESET_COCKTAIL
    })
  }catch(err) {
    dispatch({
      type: COCKTAIL_ERROR
    })
  }
}