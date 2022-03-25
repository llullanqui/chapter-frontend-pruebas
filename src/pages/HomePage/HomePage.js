import React, { useEffect, useRef, useState } from 'react';
import { createCharacter, deleteCharacter, getCharacter, updateCharacter } from '../../api';
import Button from '../../components/Button/Button';
import Character from '../../components/Character/Character';
import Editor from '../../components/Editor/Editor';
import Input from '../../components/Input';
import { HOME_PAGE_HEADER } from '../../utils/texts';
import './HomePage.scss';

const HomePage = () => {

  const [characters, setCharacters] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const componentIsMounted = useRef(true);

  const getCharacters = async (name) => {
    const {data} = await getCharacter(name);
    if(componentIsMounted.current) {
      setCharacters(data);
    }
  }

  const deleteCharacterById = async (id) => {
    const {status} = await deleteCharacter(id);
    if(status === 200) {
      getCharacters();
    }
  }

  const createNewCharacter = async () => {
    const {status} = await createCharacter({
      ...currentCharacter,
      category: "main",
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    if(status === 200) {
      getCharacters();
    }
  }

  const updateCharacterById = async ({id}) => {
    const {status} = await updateCharacter(id);
    if(status === 200) {
      getCharacters();
      setCurrentCharacter({});
      setShowEditor(false);
    }
  }

  useEffect(() => {
    getCharacters();
    return () => {
      componentIsMounted.current = false
    }
  }, [])

  useEffect(() => {
    getCharacters(searchText);
  }, [searchText])
  
  const renderCharacter = (item, index) => {
    return <div className='characters-section' key={`character${index}`}>
      <Character name={item.title} 
        image={item.image}
        editAction={() => {
          setCurrentCharacter(item);
          setShowEditor(true);
        }}
        deleteAction={() => {
          deleteCharacterById(item._id);
        }}
      />
      {index < characters.length - 1 && <div className='spacer' />}
    </div>
  }

  return (
    <div className='home-page-component' data-testid="HomePageId">
      <div className='spacer'/>
      <div className='header-section'>
        <div className='header'>
          <span>{HOME_PAGE_HEADER}</span>
        </div>
      </div>
      <div className='spacer'/>
      <div className='actions-section'>
        <div className='input'>
          <Input icon={"search"} iconColor={"grey"} placeholder={"Buscar"} onInput={setSearchText} /> 
        </div>
        <div className='spacer'/>
        <div className='button'>
          <Button text={"Nuevo"} icon="add" onClick={() => {
            setShowEditor(true);
            setCurrentCharacter({});
          }}/>
        </div>
      </div>
      {showEditor && currentCharacter && <div className='editor-section'>
        <div className='spacer'/>
        <Editor currentCharacter={currentCharacter}
          setName={(value) => {
            setCurrentCharacter({
              ...currentCharacter,
              title: value,
            })
          }}
          setDescription={(value) => {
            setCurrentCharacter({
              ...currentCharacter,
              body: value,
            })
          }}
          setImage={(value) => {
            setCurrentCharacter({
              ...currentCharacter,
              image: value,
            })
          }}
          saveAction={currentCharacter !== {} ? createNewCharacter : updateCharacterById}
          cancelAction={() => {
            setCurrentCharacter({});
            setShowEditor(false);
          }}
        />
      </div>}
      <div className='spacer'/>
      {characters.map((item, index) => renderCharacter(item, index))}
      <div className='spacer'/>
    </div>
  )
}

export default HomePage