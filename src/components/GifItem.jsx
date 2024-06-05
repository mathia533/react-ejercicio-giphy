// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
export const GifItem = ({title, url, id}) => {
  return (
    <div className="card">
        <img src={url}  alt={title} />
        <p>{title}</p>
    </div>
  )
}
