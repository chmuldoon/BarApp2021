import { connect } from 'react-redux'
import React from 'react'
import { openModal } from '../../actions/modal_actions'
import RemoveIngredientForm from '../forms/RemoveIngredientForm'

const ShelfIngredient = ({ ingredient, openModal }) => {
  return (
    <div className="shelf-ingredient">
      <div  onClick={() => openModal(<RemoveIngredientForm ingredient={ingredient}/>)} className="remove-shelf-ingredient">x</div>
      <div className="image-wrapper">
        <img src={ ingredient.img} alt={ingredient.name + "-image"}/>
      </div>
      <h3>{ingredient.name}</h3>
    </div>
  )
}

export default connect(null, { openModal })(ShelfIngredient)
