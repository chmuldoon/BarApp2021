import React from 'react'

const Sectional = ({name, children, classes = ""}) => {
  const nameToId = string => {
    return string.trim().toLowerCase().split(" ").map(el => el[0].toUpperCase() + el.slice(1)).join("")
  }
  const nameToClass = string => {
    return string.trim().toLowerCase().split(" ").join("-")
  }

  return (
    <div id={nameToId(name)} className={nameToClass(name) + " " + classes}>
        <div className="pg-max-width full-height"> 
          {children}
        </div>
    </div>

  )
}

export default Sectional
