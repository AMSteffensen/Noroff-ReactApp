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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setCharacters(json.results))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterCards = function(e) {
    console.log(e);
  };

  if (loading) {
    return <Spinner animation='border' className='spinner' />;
  }

  return (
    <>
      <Search handleSearch={filterCards} />
      <Row>
        {characters.map(character => {
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
