import React from 'react'

const Icon = ({icon}) => {
  return (
    <div data-testid="IconId">
      <i data-testid="iTagId" className='material-icons'>{icon}</i>
    </div>
  )
}

export default Icon