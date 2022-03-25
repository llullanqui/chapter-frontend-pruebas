import React from 'react'
import Icon from '../Icon'
import './Button.scss'

const Button = ({text, icon, backgroundColor="crimson", textColor="white"}) => {

  return (
    <div className='button-component' data-testid="ButtonId">
      <button className='button' style={{backgroundColor}}>
        <div className='button-content' style={{color: textColor}}>
          {icon && <Icon icon={icon} />}
          {icon && text && <div style={{width:12}} />}
          {text && text}
        </div>
      </button>
    </div>
  )
}

export default Button