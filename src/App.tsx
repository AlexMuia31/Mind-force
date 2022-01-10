import { Box, Container } from '@material-ui/core';
import React from 'react';
import './App.css';


import { Appbar } from './components/AppBar/AppBar';
import { Cards } from './components/Cards/Cards';

function App() {

  return (
    <Box>
      <Appbar />
      <Cards />

    </Box>
  );
}

export default App;
