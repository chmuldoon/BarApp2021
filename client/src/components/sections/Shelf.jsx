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
    const sortedUserIngredients = userIngredients.sort((a, b) => {
    var textA = a.name.toUpperCase();
    var textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
    return sortedUserIngredients.map(ing => {
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
