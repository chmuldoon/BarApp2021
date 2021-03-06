import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
const CocktailCard = ({ shelf, cocktail, loaded, setLoaded}) => {
  // const [loading, setLoading] = useState(true)
  const ingredientCount = cocktail.using2.filter(el => shelf.includes(el)).length
  const ingredientList  = (<ul>
        {cocktail.using.map((el, i) => {
         return (<li key={cocktail._id + "-" + cocktail.using2[i]} className={(shelf.includes(cocktail.using2[i])) ? "has-ingredient" : ""}>{el}</li>)
        })}
      </ul>)
  return (<Fragment>

    <div className={"cocktail-card"}>
      <div className="img-wrapper">
        <div className="img-container">
          <img onLoad={() => {
            debugger
            setLoaded(!loaded)
          }} loading="lazy" alt="" src={cocktail.userMade ? cocktail.photo : `https://www.thecocktaildb.com/images/media/drink/${cocktail.photo}`} />
        </div>
        <div className="ingredient-fraction">{ingredientCount} / {cocktail.using2.length}</div>
        <div className="cocktail-link">
          <Button 
            classes="bg-lavendar"
            hrefUrl={`/cocktails/${cocktail._id}`}
            pageId={cocktail._id}>
              Learn More
          </Button>
        </div>
      </div>

      <div className="cocktail-information">
        <br></br>
        <div className="content">
          <h3>{cocktail.name}</h3>
          {ingredientList}
        </div>
      </div>
    </div>
  </Fragment>)
}

export default CocktailCard
