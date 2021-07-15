import React from 'react'

const ShelfIngredient = ({ ingredient }) => {
  return (
    <div className="shelf-ingredient">
      <div className="image-wrapper">
        <img src={ ingredient.img} alt={ingredient.name + "-image"}/>
      </div>
      <h3>{ingredient.name}</h3>

    </div>
  )
}

export default ShelfIngredient
