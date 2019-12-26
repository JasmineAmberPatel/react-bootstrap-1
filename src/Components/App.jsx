import React from 'react';
import NavBar from './NavBar';
import '../../Styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
