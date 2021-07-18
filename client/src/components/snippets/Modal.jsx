import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
const Modal = ({closeModal, modal_id, component}) => {
  
  
  if(component){
    return (
    <div  onClick={(e) => closeModal(e)} className={"modal-outer modal-closer activated"}>
      <div className="modal-inner">
        {component}
      </div>
    </div>
  )
  }else{
    return(<Fragment></Fragment>)
  }


}
const mapStateToProps = (state) => ({
  modal_id: state.modal.modal_id,
  loading: state.modal.loading,
  component: state.modal.component
});
export default connect(mapStateToProps, {closeModal})(Modal)
