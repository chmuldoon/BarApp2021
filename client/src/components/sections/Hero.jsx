import React from 'react'

const Hero = () => {
  return (
    <section className="hero-section" id="HeroSection">
      <div className="hero-content"
            style={{ backgroundImage:   "url(" + `${process.env.PUBLIC_URL}/spritz.jpg` + ")"}}
      >
        <div className="pg-max-width full-width full-height"> 
          <h1>Your next drink starts with HomeBar!</h1>
          <p>Explore hundreds of a recipies,<br></br> expand your tastes,<br></br> impress your friends,<br></br> become a mixologist!</p>
          <div className="">
            I want to make kickass cocktails
          </div>
        </div>
      </div>
      

    </section>
  )
}

export default Hero
