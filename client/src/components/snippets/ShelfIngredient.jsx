import React, { useState } from 'react'
import { openModal } from '../../actions/modal_actions'
import Modal from './Modal'
const ShelfIngredient = ({ ingredient }) => {
  const [component, setModal] = useState(null)
  const handleRemove = (ingredient) => {
    let newModal = (<Modal id={`add-${ingredient._id}`}>
      <div className="remove-ingredient-modal">
        <h2>{`Are you sure you want to remove `}
          <span style={{ textTransform: 'capitalize' }}>{ingredient.name}</span>
          {" from your shelf?"}
        </h2>
      </div>
    </Modal>)
    debugger

    setModal(newModal)
    debugger
    return openModal(`add-${ingredient._id}`)
  } 
  return (
    <div className="shelf-ingredient">
      <div onClick={() => handleRemove(ingredient)} className="remove-shelf-ingredient">x</div>
      <div className="image-wrapper">
        <img src={ ingredient.img} alt={ingredient.name + "-image"}/>
      </div>
      <h3>{ingredient.name}</h3>
      {component ? component : null}
    </div>
  )
}

export default ShelfIngredient
