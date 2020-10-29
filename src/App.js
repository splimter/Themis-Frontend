import React from 'react';
import { BrowserRouter as BR, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <BR>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </BR>
  );
}

export default App;
