import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ingredientsReducer } from "./ingredientsReducer";
import { modalReducer } from "./modalReducer";
import { searchReducer } from "./searchReducer";
export default combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer,
  modal: modalReducer,
  search: searchReducer
});