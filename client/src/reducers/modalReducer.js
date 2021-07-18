const { OPEN_MODAL, CLOSE_MODAL } = require("../actions/types");
const initialState = {
  loading: true,
  component: null,
}

export const modalReducer = (state = initialState, { type, payload}) => {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case CLOSE_MODAL:
      return {
        component: null,
        loading: false,
      }
    default:
      return state;
  }
}