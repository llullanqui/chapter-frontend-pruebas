import React, { useState } from 'react'
import Button from '../Button';
import Input from '../Input';

const Editor = ({initialName = '', initialDescription = '', initialImage = '', saveAction, cancelAction}) => {

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);
  
  return (
    <div className='editor-component' data-testid="EditorId">
      <div>
        <Input initalValue={name} placeholder={"Nombre"} onInput={setName}/>
        <Input initalValue={description} placeholder={"Descripción"} onInput={setDescription}/>
        <Input initalValue={image} placeholder={"URL"} onInput={setImage}/>
      </div>
      <div className='buttons-section'>
        <div>
          <Button text={"Guardar"} icon={"save"} onClick={saveAction}/>
        </div>
        <div>
          <Button text={"Cancelar"} icon={"cancel"} onClick={cancelAction}/>
        </div>
      </div>
    </div>
  )
}

export default Editor