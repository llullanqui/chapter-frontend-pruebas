import React, { useEffect, useState } from 'react'
import Button from '../Button';
import Input from '../Input';
import './Editor.scss'

const Editor = ({objectId, currentCharacter = {}, setName, setDescription, setImage, saveAction, cancelAction}) => {

  const [character, setCharacter] = useState(currentCharacter);

  useEffect(() => {
    console.log(character);
  }, [character])
  
  return (
    <div className='editor-component' data-testid="EditorId">
      <div className='inputs-section'>
        <span>Nombre:</span>
        <Input initialValue={character.title} placeholder={"Nombre"} onInput={setName}/>
        <div className='spacer' />
        <span>Descripción:</span>
        <Input initialValue={character.body} placeholder={"Descripción"} onInput={setDescription}/>
        <div className='spacer' />
        <span>Imagen:</span>
        <Input initialValue={character.image} placeholder={"URL"} onInput={setImage}/>
      </div>
      <div className='spacer' />
      <div className='buttons-section'>
        <div className='button'>
          <Button text={"Guardar"} icon={"save"} onClick={saveAction}/>
        </div>
        <div className='spacer'/>
        <div className='button'>
          <Button text={"Cancelar"} icon={"cancel"} onClick={cancelAction}/>
        </div>
      </div>
    </div>
  )
}

export default Editor