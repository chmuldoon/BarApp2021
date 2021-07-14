import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../snippets/Button'
const Hero = () => {
  return (
    <section className="hero-section" id="HeroSecxion">
      <div className="hero-content"
            style={{ backgroundImage:   "url(" + `${process.env.PUBLIC_URL}/spritz.jpg` + ")"}}
      >
        <div className="pg-max-width  full-height"> 
          <div className="hero-text">
            <h1>Your next drink starts with HomeBar!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button classes="bg-lavendar" hrefUrl="/register" >
              I want to make kickass cocktails
            </Button>
          </div>

        </div>
      </div>
      

    </section>
  )
}

export default Hero
