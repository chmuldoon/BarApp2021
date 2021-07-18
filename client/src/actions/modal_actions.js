const { OPEN_MODAL, CLOSE_MODAL } = require("./types");

export const openModal = (component) => (dispatch) => {
  debugger
  dispatch({
    type: OPEN_MODAL,
    payload: { component }
  })
}
export const closeModal = (e) => (dispatch) => {
  e.stopPropagation()
  if(e.target.classList.contains("modal-closer")){
    dispatch({
      type: CLOSE_MODAL,
      payload: { }
    })
  }
}