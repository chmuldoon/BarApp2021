import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCocktail, formCocktailUrl, resetCocktail } from '../../actions/cocktail_actions'
import Sectional from '../sections/Sectional'
const IndividualCocktail = ({match, formCocktailUrl, fetchCocktail,resetCocktail,  cocktail, shelf }) => {
  const cocktailUpperItemList = () => {
    return cocktail.using.map((el, i) => {
      return (<li className={(shelf.includes(cocktail.using2[i])) ? "has-ingredient" : ""}>{el}</li>)
    })
  }
  useEffect(() => {
    fetchCocktail(match.params.id)

    return () => {
      return resetCocktail()
    }
  },[match ])
  
  if(cocktail) {
    return (<Sectional name="Individual Cocktail">

    <div className="cocktail-header">
      <div className="cocktail-text-content">
        <h1>{cocktail.name}</h1>
        <h2>Made with</h2>
        {cocktailUpperItemList()}
      </div>
      <img alt="" src={cocktail.userMade ? cocktail.photo : `https://www.thecocktaildb.com/images/media/drink/${cocktail.photo}`}/>

    </div>


  </Sectional>)
  }else {
    return null
  }
  

}
const mapStateToProps = state => {
  return{
  cocktail: state.cocktails.cocktail_page,
  shelf: state.auth.user.ingredients
}}
export default connect(mapStateToProps ,{ fetchCocktail, formCocktailUrl, resetCocktail })(IndividualCocktail);
