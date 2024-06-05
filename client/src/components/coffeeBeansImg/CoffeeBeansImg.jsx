import React from 'react'
import coffeeBeans from '../../assets/images/coffee-beans.jpg'
import './CoffeeBeansImg.scss'

const CoffeeBeansImg = () => {
  return (
    <img 
        src={coffeeBeans} 
        alt="coffeeBeans" 
        className="coffeeBeansImg__image" 
    />
  )
}

export default CoffeeBeansImg