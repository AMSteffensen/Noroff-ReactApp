import React, {useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {BASE_URL} from '../../../constants/API';
import './CharacterList.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterItem from './CharacterItem';
import Search from './Search';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(jsonRes => {
        setCharacters(jsonRes.results);
        setFilteredCharacters(jsonRes.results);
      })

      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const clearInputValue = () => {
    setInputValue('');
    setFilteredCharacters(characters);
  };

  const filterCards = function(e) {
    // Let's get the value the user typed in and make it lower case:
    const searchValue = e.target.value.toLowerCase();

    setInputValue(e.target.value);
    if (!searchValue) {
      setInputValue('');
    }
    // create a new array from the characters array
    const filteredArray = characters.filter(function(char) {
      // make each name lowercase so we can check it properly with the search value
      const lowerCaseName = char.name.toLowerCase();

      // check if the character name begins with the search value
      if (lowerCaseName.startsWith(searchValue)) {
        // if it does, return true
        // this will add it to the new filtered array
        return true;
      }
      return false;
    });

    // set filtered characters to the new array
    setFilteredCharacters(filteredArray);
  };

  if (loading) {
    return <Spinner animation='border' className='spinner' />;
  }

  return (
    <>
      <Search handleSearch={filterCards} />
      <Row>
        {filteredCharacters.map(character => {
          const {id, name, image} = character;

          return (
            <Col sm={6} md={3} key={id}>
              <CharacterItem id={id} name={name} image={image} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
