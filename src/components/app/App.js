import React from 'react';
import ErrorBoundry from '../error-boundry'
import Header from '../header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import TypeList from '../type-list/TypeList';
import PokemonData from '../pk-data/pokemon-data';
import TypeData from '../pk-data/type-data';
const App = () => {

  return (
    <ErrorBoundry>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={PokemonData} exact />
          <Route path='/type' exact component={() => <TypeList />} />
          <Route path='/type/:id' key="reload" render={
            ({ match }) => {
              return <TypeData itemId={match.params.id} />
            }
          } />
          <Redirect to='/404' />
        </Switch>
      </Router>
    </ErrorBoundry>
  );
}

export default App;
