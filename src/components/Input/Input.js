import React, { useState } from 'react'
import Icon from '../Icon'
import './Input.scss'

const Input = ({icon, iconColor, placeholder, onInput}) => {

  // const [query, setQuery] = useState("");


  return (
    <div className='input-component' data-testid="InputId">
      {icon && <div style={{color: iconColor}}><Icon icon={icon}/></div>}
      {icon && <div style={{width: 4}}/>}
      <input className='input-input' data-testid="InnerInputId"
        placeholder={placeholder}
        onInput={(e) => onInput(e.target.value)}
      />
    </div>
  )
}

export default Input