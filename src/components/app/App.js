import React, { useState, useEffect } from 'react';
import PokeapiService from '../../services/PokeapiService'
import Loading from '../loading'
import ErrorBoundry from '../error-boundry'
import './App.css';

const App = () => {
  const [allPokemons, setAllPokemons] = useState([])
  const pokeapiService = new PokeapiService()
  const { getAllPokemons } = pokeapiService
  useEffect((allPokemons) => {
    async function fetchData() {
      const res = await getAllPokemons()
      setAllPokemons(res)
    }
    fetchData()
  }, [])
  if (!allPokemons) {
    return <Loading />
  }
  return (
    <ErrorBoundry>
      <div className="row">
        {allPokemons.map(pokemon => {
          return (

            <div className="col-sm-3 d-flex align-items-stretch">
              <div className="card">
                <img className="card-img-top" src={``} alt={``} />
                <div className="card-body" >
                  <h3 className="card-title">{}</h3>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </ErrorBoundry>
  );
}

export default App;
