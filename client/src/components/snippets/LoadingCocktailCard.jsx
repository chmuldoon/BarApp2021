import React, { Fragment } from 'react'
const LoadingCocktailCard = ({ cocktail }) => {
  return (
    <Fragment>
    <div className={"cocktail-card loading-card"}>
      <div className="img-wrapper">
        <div className="img-container">
          <img alt=""/>
        </div>
        <div className="cocktail-link">
       
        </div>
      </div>

      <div className="cocktail-information">
        <br></br>
        <div className="content">
          <h3>{"-".repeat(cocktail.name.length)}</h3>
          <ul>
          {cocktail.using.map((el, i) => {
          return (<li class="loading-ing">{"―".repeat(el.length)}</li>)
          })}
        </ul>
        </div>
      </div>
    </div>

  </Fragment>
  )
}

export default LoadingCocktailCard
