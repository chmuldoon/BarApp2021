import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchMyIngredients } from '../../actions/ingredient_actions'
import { fetchSearchItems } from '../../actions/search_actions'
import AddIngredientForm from '../forms/AddIngredientForm'
import Shelf from '../sections/Shelf'
import ShelfInfo from '../sections/ShelfInfo'
import Modal from '../snippets/Modal'
const ShelfPage = ({fetchMyIngredients, fetchSearchItems}) => {
  // const [modalStatus, setModalStatus] = useState(true)
  useEffect(() => {
    fetchMyIngredients()
    fetchSearchItems()
  }, [])
  return (
    <div className="shelf-page">
      <ShelfInfo/>
      <Shelf />
      {/* <Modal id="add-shelf-modal">
        <AddIngredientForm/>
      </Modal> */}
    </div>
  )
}


export default connect(null, { fetchMyIngredients, fetchSearchItems })(ShelfPage)
