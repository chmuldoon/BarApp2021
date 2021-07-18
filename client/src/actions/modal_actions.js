const { OPEN_MODAL, CLOSE_MODAL } = require("./types");

export const openModal = (id) => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: { modal_id: id }
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