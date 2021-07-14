import React from 'react'

const DetailItem = ({imgUrl, children}) => {
  return (
    <div className="detail-item">
        <img src={imgUrl} alt="" />
        {children}
    </div>
  )
}

export default DetailItem
