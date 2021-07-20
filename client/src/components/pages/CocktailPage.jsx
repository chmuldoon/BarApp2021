import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserCocktails } from '../../actions/cocktail_actions';
import CocktailInfo from '../sections/CocktailInfo';
import Cocktails from './Cocktails';
const CocktailPage = ({ fetchUserCocktails }) => {
  useEffect(() => {
    fetchUserCocktails()
  })

  return (
    <div>
      <CocktailInfo />
      <Cocktails />
    </div>
  )
}

export default connect(null, { fetchUserCocktails })(CocktailPage);
