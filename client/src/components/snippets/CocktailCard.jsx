import React from 'react'
const CocktailCard = ({cocktail}) => {
  return (
    <div className="cocktail-card">
      <img loading="lazy" alt="" src={cocktail.userMade ? cocktail.photo : `https://www.thecocktaildb.com/images/media/drink/${cocktail.photo}`} />
      <div className="cocktail-information">

        <div className="content">
          <h2>{cocktail.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default CocktailCard
