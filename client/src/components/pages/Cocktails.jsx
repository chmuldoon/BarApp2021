import React from 'react'
import { connect } from 'react-redux'
import Sectional from '../sections/Sectional'
import CocktailCard from '../snippets/CocktailCard'
import LazyComponent from '../snippets/LazyComponent'
import LoadingCocktailCard from '../snippets/LoadingCocktailCard'
const Cocktails = ({ cocktails, loading, currentUser }) => {
  const renderCocktails = () => {
    return cocktails.map(cocktail => {
      return <LazyComponent
        key={"lazy-" + cocktail._id}
        lazy={<CocktailCard key={"cocktail-card-" + cocktail._id} shelf={currentUser.ingredients} cocktail={cocktail}/>}
        loader={<LoadingCocktailCard cocktail={cocktail} />}
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
