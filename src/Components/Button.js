import React from 'react'
import './Button.css'

const Button = ({ label, type }) => {
  return (
    <div>
      <button className={`button ${type}`}>{label}</button>
    </div>
  )
}

export default Button
