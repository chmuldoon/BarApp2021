import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMyIngredients } from '../../actions/ingredient_actions'
import Button from '../snippets/Button'
import ShelfIngredient from '../snippets/ShelfIngredient'
import Sectional from './Sectional'
const Shelf = ({userIngredients, fetchMyIngredients, loading}) => {
  // useEffect(() => {
  //   fetchMyIngredients()
  // }, [])
  const renderUserIngredients = () => {
    return userIngredients.map(ing => {
      return <ShelfIngredient key={`shelf-ing-${ing._id}`} ingredient={ing}/>
    })
  }
  return (

    <Sectional name="Shelf Display">
      {loading ? (<div>Loading :)</div>) : (renderUserIngredients())}
    </Sectional>
  )
}
const mapStateToProps = (state) => ({
  userIngredients: state.ingredients.ingredients,
  loading: state.ingredients.loading
});

export default connect(mapStateToProps, { fetchMyIngredients })(Shelf);
