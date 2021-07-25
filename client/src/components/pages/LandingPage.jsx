import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Details from '../sections/Details'
import Hero from '../sections/Hero'
const LandingPage = ({token}) => {
  if(token) {
    return(<Redirect to="/shelf" />)
  }
  return (
    <div>
      <Hero/>
      <Details/>
    </div>
  )
}
const mapStateToProps = state => ({
  token: state.auth.token
})
export default connect(mapStateToProps, null)(LandingPage);
