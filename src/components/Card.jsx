import React from 'react'

const card = ({img,tag,title,description}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <span>{tag}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default card
