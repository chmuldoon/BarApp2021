import React from 'react'
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import AddIngredientForm from '../forms/AddIngredientForm'
import Button from '../snippets/Button'
import Sectional from './Sectional'
const ShelfInfo = ({openModal}) => {

  return (
    <Sectional name="Shelf Info" classes="left-aligned">
      <h1>Here's what you have in your shelf.</h1>
      <p>For best results sure to keep your shelf updated with what you have in your kitchen and pantry.</p>
      <Button classes="bg-lavendar" fn={() => openModal(<AddIngredientForm/>)}>Add an Ingredient to your Shelf</Button>
      <h2 style={{textAlign: "center"}}>Shelf</h2>
    </Sectional>
  )
}

export default connect(null, {openModal})(ShelfInfo);
