import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <div className="App">
      <Router>
        <Page1 path="/home"/>
        <Page2 path="/:routevalue"/>
        <Page3 path="/:anyword/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
