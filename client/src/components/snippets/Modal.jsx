import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
const Modal = ({closeModal, modal_id, children, id}) => {
  
  
  if(modal_id && modal_id === id){
    return (
    <div id={id} onClick={(e) => closeModal(e)} className={"modal-outer modal-closer activated"}>
      <div className="modal-inner">
        {children}
      </div>
    </div>
  )
  }else{
    return(<Fragment></Fragment>)
  }


}
const mapStateToProps = (state) => ({
  modal_id: state.modal.modal_id,
  loading: state.modal.loading
});
export default connect(mapStateToProps, {closeModal})(Modal)
