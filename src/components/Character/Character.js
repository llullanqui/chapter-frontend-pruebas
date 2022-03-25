import React from 'react'
import Button from '../Button'
import './Character.scss'

const Character = ({category, image, name, editAction, deleteAction}) => {
  return (
    <div className='character-component' data-testid="CharacterId">
      <div className='image-section'>
        <img className='image' alt={name} src={image}/>
      </div>
      <div className='low-section'>
        <span className='character-name'>{name}</span>
        <div className='button-section'>
          <div className='button'>
            <Button icon={"edit"} backgroundColor="white" textColor='crimson' onClick={editAction}/>
          </div>
          <div className='spacer'/>
          <div className='button'>
            <Button icon={"delete"} backgroundColor="white" textColor='crimson' onClick={deleteAction}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character