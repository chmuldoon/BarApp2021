import React, { cloneElement, Fragment, useState } from 'react'
const LazyComponent = ({lazy, loader}) => {
  const [loaded, setLoaded] = useState(false);
  debugger
  return (
    <div>
      <div className={loaded ? "" : "hidden"}>
        {cloneElement(lazy, { loaded, setLoaded})}
      </div>
      <div className={loaded ? "hidden" : ""}>
        {loader}
      </div>
      
    </div>
  )
}

export default LazyComponent
