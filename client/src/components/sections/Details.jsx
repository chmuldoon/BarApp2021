import React from 'react'
import { Link } from 'react-router-dom'
import DetailItem from '../snippets/DetailItem'
const Details = () => {
  return (
  
    <div id="DetailsSection" className="details-section">
        <div className="pg-max-width full-height"> 
          <DetailItem imgUrl={process.env.PUBLIC_URL + "/icons8-cocktail-shaker-50.png"}>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. onsectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <Link to="/register">Consectetur adipiscing</Link>
          </DetailItem>
          <DetailItem imgUrl={process.env.PUBLIC_URL + "/icons8-cocktail-64.png"}>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  consectetur adipiscing elit, sed do eiusmod tempor incididunt. Consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <Link to="/register">Consectetur adipiscing</Link>

          </DetailItem>
          <DetailItem imgUrl={process.env.PUBLIC_URL + "/icons8-confetti-50.png"}>
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <Link to="/register">Consectetur adipiscing</Link>

          </DetailItem>
        </div>
    </div>
  )
}

export default Details
