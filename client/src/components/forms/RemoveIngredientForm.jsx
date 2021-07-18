import React from 'react'
import { connect } from 'react-redux'
import { fetchMyIngredients, removeIngredientFromShelf } from '../../actions/ingredient_actions'
import { closeModal } from '../../actions/modal_actions'
import Button from '../snippets/Button'
const RemoveIngredientForm = ({ ingredient, removeIngredientFromShelf }) => {
  return (
    <div className="remove-ingredient-modal">
        <h2>{`Are you sure you want to remove `}
          <span style={{ textTransform: 'capitalize' }}>{ingredient.name}</span>
          {" from your shelf?"}
        </h2>
      <div class="button-wrapper">
        <Button classes="bg-lavendar modal-closer">Cancel</Button>
        <Button classes="bg-red modal-closer" fn={(e) => {removeIngredientFromShelf(ingredient._id); closeModal(e); fetchMyIngredients() }}>Remove{` ${ingredient.name}`}</Button>
      </div>
    </div>
  )
}

export default connect(null, { removeIngredientFromShelf, closeModal, fetchMyIngredients  })(RemoveIngredientForm)
