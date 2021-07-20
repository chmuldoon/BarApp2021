import React from 'react'
import { connect } from 'react-redux'
import Sectional from '../sections/Sectional'
import CocktailCard from '../snippets/CocktailCard'
const Cocktails = ({ cocktails, loading, currentUser }) => {
  const renderCocktails = () => {
    return cocktails.map(cocktail => {
      return <CocktailCard cocktail={cocktail}/>
    })
  }
  return (
    <Sectional name="Cocktail Display">
      {loading ? (<div>Loading :)</div>) : renderCocktails()}
    </Sectional>
  )
}
const mapStateToProps = state => ({
  cocktails: state.cocktails.cocktails,
  loading: state.cocktails.loading,
  currentUser: state.auth.user
})
export default connect(mapStateToProps, {})(Cocktails)
