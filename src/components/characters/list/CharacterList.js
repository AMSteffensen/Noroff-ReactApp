import React, {useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import {BASE_URL} from '../../../constants/API';

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

  if (loading) {
    return <Spinner animation='border' className='spinner' />;
  }

  return (
    <ul>
      {characters.map(c => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
}
