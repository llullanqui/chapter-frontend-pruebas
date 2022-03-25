import React from 'react'
import Icon from '../Icon'
import './Input.scss'

const Input = ({icon, iconColor, placeholder, }) => {
  return (
    <div className='input-container' data-testid="InputId">
      {icon && <div style={{color: iconColor}}><Icon icon={icon}/></div>}
      {icon && <div style={{width: 4}}/>}
      <input className='input-input' data-testid="InnerInputId"
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input