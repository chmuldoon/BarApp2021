import { connect } from 'react-redux'
import React from 'react'
import { openModal } from '../../actions/modal_actions'
import RemoveIngredientForm from '../forms/RemoveIngredientForm'

const ShelfIngredient = ({ ingredient, openModal }) => {
  return (
    <div className="shelf-ingredient">
      <div  onClick={() => openModal(<RemoveIngredientForm ingredient={ingredient}/>)} className="remove-shelf-ingredient">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
      </div>
      <div className="image-wrapper">
        <img src={ ingredient.img} alt={ingredient.name + "-image"}/>
      </div>
      <h3>{ingredient.name}</h3>
    </div>
  )
}

export default connect(null, { openModal })(ShelfIngredient)
