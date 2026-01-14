import React from 'react'
import "./Card.css"

const card = ({img,tag,title,description,className}) => {
  return (
    <div className={className + " card"}>
      <img className='img' src={img} alt="" />
      <span className='tag' >{tag}</span>
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </div>
  )
}

export default card
