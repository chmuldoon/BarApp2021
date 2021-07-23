import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ hrefUrl = null, children, classes = "", fn = null }) => {
  if(hrefUrl){
    return (<Link to={hrefUrl} >
      <div className={"my-btn " + classes}>
        {children}
      </div>
    </Link>)
  } else {
    return (<div style={{cursor: "pointer"}} className={"my-btn " + classes} onClick={fn}>
      {children}
    </div>)
  }
}


export default Button


