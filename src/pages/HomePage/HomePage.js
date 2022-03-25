import React from 'react';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon';
import Input from '../../components/Input';

const HomePage = () => {
  return (
    <div data-testid="HomePageId">
      <Icon icon={"cloud"}/>
      <Button text={"Guardar"} icon="save"/>
      <Input icon={"search"} iconColor={"grey"} placeholder={"Buscar"} /> 
    </div>
  )
}

export default HomePage