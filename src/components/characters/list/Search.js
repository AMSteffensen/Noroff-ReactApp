import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import ClearSearch from './ClearSearch';

export default function Search({handleSearch, inputValue, clearInput}) {
  return (
    <InputGroup className='search'>
      <FormControl
        placeholder='Search by name...'
        onChange={event => handleSearch(event)}
      />
      {/* <InputGroup.Append>
        <ClearSearch inputValue={inputValue} clearEvent={clearInput} />
      </InputGroup.Append> */}
    </InputGroup>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
