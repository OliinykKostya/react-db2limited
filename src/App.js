import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RootRouter } from './page/RootRouter';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={RootRouter} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
