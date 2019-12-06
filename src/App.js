import React from 'react';
//import Heading from './components/layout/Heading';
import Subheading from './components/layout/Subheading';
import Paragrah from './components/layout/Paragrah';
import Button from './components/layout/Button';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  function formatName() {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Andreas',
    lastName: 'Steffensen'
  };

  return (
    <div className='App'>
      <Layout />
    </div>
  );
}

export default App;
