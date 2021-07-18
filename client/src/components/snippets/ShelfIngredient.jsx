import { connect } from 'react-redux'
import React from 'react'
import { openModal } from '../../actions/modal_actions'
const RemoveShelfIngredient = ({ ingredient }) => {
  return (
    <div className="remove-ingredient-modal">
        <h2>{`Are you sure you want to remove `}
          <span style={{ textTransform: 'capitalize' }}>{ingredient.name}</span>
          {" from your shelf?"}
        </h2>
      </div>
  )
}

const ShelfIngredient = ({ ingredient, openModal }) => {
  return (
    <div className="shelf-ingredient">
      <div  onClick={() => openModal(<RemoveShelfIngredient ingredient={ingredient}/>)} className="remove-shelf-ingredient">x</div>
      <div className="image-wrapper">
        <img src={ ingredient.img} alt={ingredient.name + "-image"}/>
      </div>
      <h3>{ingredient.name}</h3>
    </div>
  )
}

export default connect(null, { openModal })(ShelfIngredient)
