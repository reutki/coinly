import React, { useState, useEffect } from 'react';
import 'normalize.css';
import { AppStyle } from './StyledApp';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation/Navigation';
import Form from '../components/Form';
import { setAuthorized, setUnauthorized } from './services/Authorization';
import { useDispatch } from 'react-redux';

function App() {
  const authorized = useSelector((state) => state.auth.authorized);

  const [value, setValue] = useState('trending');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppStyle>
      {authorized ? (
        <Navigation handleChange={handleChange} value={value} />
      ) : (
        <Form />
      )}
    </AppStyle>
  );
}

export default App;
