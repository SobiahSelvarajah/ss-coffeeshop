import React from 'react'
import coffee from '../../assets/images/coffee.jpg'
import './CoffeeImg.scss'

const CoffeeImg = () => {
  return (
    <img 
        src={coffee} 
        alt="coffee" 
        className="coffeeImg__image"
    />
  )
}

export default CoffeeImg