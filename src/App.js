import React from 'react';
//import Heading from './components/layout/Heading';
import Subheading from './components/layout/Subheading';
import Paragrah from './components/layout/Paragrah';
import Button from './components/layout/Button';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  function formatName() {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Andreas',
    lastName: 'Steffensen'
  };

  //const element = <h1>Hello, {formatName(user)}</h1>;

  return (
    <div className='App'>
      <Layout />
      {/* <Subheading title='This is a subheading' />
      <Paragrah title='This is a paragraph' />
      <Button title='This a button' />
      {element} */}
    </div>
  );
}

export default App;
