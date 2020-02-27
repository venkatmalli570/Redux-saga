import React from 'react';
import './App.css';
import Today from './today';
import Check from './check';

import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <Switch>
    <div>
            <Route exact path={"/"} component={Check} />
            <Route path={"/Check"} component={Check} />
            <Route path={"/Today"} component={Today} />
        
    </div>
    </Switch>
  );
}

export default App;
