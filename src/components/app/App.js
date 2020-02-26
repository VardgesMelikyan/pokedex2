import React, { useState, useEffect } from 'react';
import PokeapiService from '../../services/PokeapiService'
import Loading from '../loading'
import ErrorBoundry from '../error-boundry'
import './App.css';
import PokemonList from '../pokemon-list';

const App = () => {

  return (
    <ErrorBoundry>
      <PokemonList />
    </ErrorBoundry>
  );
}

export default App;
