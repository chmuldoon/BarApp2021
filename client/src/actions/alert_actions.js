import { SET_ALERT, REMOVE_ALERT } from "./types";
debugger
//alert structure
// {
//   id: __
//   msg: __
//   alertType: __
// }
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = Math.floor(Math.random() * 100000)
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};