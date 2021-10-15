import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import SingleNews from './components/SingleNews';
import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/bookmarks" exact>
          <Bookmarks />
        </Route>
        <Route path="/:id" exact>
          <SingleNews />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
