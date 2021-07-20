import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cocktailsReducer } from "./cocktailsReducer";
import { ingredientsReducer } from "./ingredientsReducer";
import { modalReducer } from "./modalReducer";
import { searchReducer } from "./searchReducer";
export default combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer,
  cocktails: cocktailsReducer,
  search: searchReducer,
  modal: modalReducer
});