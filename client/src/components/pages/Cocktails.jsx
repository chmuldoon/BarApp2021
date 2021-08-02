import React from 'react'
import { connect } from 'react-redux'
import Sectional from '../sections/Sectional'
import CocktailCard from '../snippets/CocktailCard'
import LazyComponent from '../snippets/LazyComponent'
const Cocktails = ({ cocktails, loading, currentUser }) => {
  const renderCocktails = () => {
    return cocktails.map(cocktail => {
      return <LazyComponent
        lazy={<CocktailCard shelf={currentUser.ingredients} cocktail={cocktail}/>}
        loader={<div>Loading</div>}
      />
      
      
      
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
