import React from 'react'
import Button from '../snippets/Button'
import Sectional from './Sectional'
const CocktailInfo = () => {
  return (
    <Sectional name="Cocktail Info" classes="left-aligned">
      <h1>Cocktails</h1>
      <p>Here are some cocktails that you can make or are close to being able to make</p>
      <Button hrefUrl="/shelf" classes="bg-lavendar">Add an Ingredient</Button>
    </Sectional>
  )
}

export default CocktailInfo
