const { OPEN_MODAL, CLOSE_MODAL } = require("./types");

export const openModal = (component) => (dispatch) => {
  let body = document.getElementsByClassName("vsc-initialized")[0];
  debugger
  body.classList.add("body-lock");

  dispatch({
    type: OPEN_MODAL,
    payload: { component }
  })
}
export const closeModal = (e) => (dispatch) => {
  e.stopPropagation()
  let body = document.getElementsByClassName("vsc-initialized")[0]
  debugger
  body.classList.remove("body-lock");
  
  if(e.target.classList.contains("modal-closer")){
    dispatch({
      type: CLOSE_MODAL,
      payload: { }
    })
  }
}