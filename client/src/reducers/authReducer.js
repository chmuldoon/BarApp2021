import { USER_LOADED, 
        LOGIN_FAIL, 
        LOGIN_SUCCESS,  
        REGISTER_FAIL,
        REGISTER_SUCCESS,
        AUTH_ERROR,
        LOGOUT,
        UPDATE_SHELF_USER
      } from "../actions/types";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};


export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.data,
      };
    case UPDATE_SHELF_USER:
      debugger
      let newList;
      if(payload.remove) {
        newList = state.user.ingredients.filter(el => el !== payload.ingredient._id)
      } else {
        newList = state.user.ingredients.concat([payload.ingredient._id]);
      }
      return {
        ...state,
        user: {
          ...state.user,
          ingredients: newList
        },
        loading: false
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};