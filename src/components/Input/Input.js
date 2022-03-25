import React, { useEffect, useState } from 'react'
import Icon from '../Icon'
import './Input.scss'

const Input = ({icon, iconColor, placeholder, initialValue = "", onInput}) => {

  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    const timeOutId = setTimeout(() => onInput(query), 500);
  
    return () => clearTimeout(timeOutId)
  }, [query]);

  return (
    <div className='input-component' data-testid="InputId">
      {icon && <div style={{color: iconColor}}><Icon icon={icon}/></div>}
      {icon && <div style={{width: 4}}/>}
      <input className='input-input' data-testid="InnerInputId"
        placeholder={placeholder}
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Input