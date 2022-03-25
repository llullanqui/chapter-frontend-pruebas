import React from 'react'
import Icon from '../Icon'
import './Button.scss'

const Button = ({text, icon}) => {

  return (
    <div data-testid="ButtonId">
      <button className='button'>
        <div className='button-content'>
          {icon && <Icon icon={icon} />}
          {icon && text && <div style={{width:12}} />}
          {text && text}
        </div>
      </button>
    </div>
  )
}

export default Button