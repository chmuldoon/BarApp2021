import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ingredientsReducer } from "./ingredientsReducer";
export default combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer
});