import React from 'react'

const ButtonComponent = ({ type, onClick, variant, className, id, label, size }) => {
  return (
    <ButtonComponent
      type={type}
      variant={variant}
      onClick={onClick}
      className="btn-component"
      id={id}
      size={size}
    >
      {label}
    </ButtonComponent>
  )
}

export default ButtonComponent
