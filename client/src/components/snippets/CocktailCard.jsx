import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button';
const CocktailCard = ({ shelf, cocktail}) => {
  const ingredientCount = cocktail.using2.filter(el => shelf.includes(el)).length
  const ingredientList  = (<ul>
        {cocktail.using.map((el, i) => {
         return (<li className={(shelf.includes(cocktail.using2[i])) ? "has-ingredient" : ""}>{el}</li>)
        })}
      </ul>)
  return (
    <div className="cocktail-card">
      <div className="img-wrapper">
       <img loading="lazy" alt="" src={cocktail.userMade ? cocktail.photo : `https://www.thecocktaildb.com/images/media/drink/${cocktail.photo}`} />
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
  )
}

export default CocktailCard
