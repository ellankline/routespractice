import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Input from './components/Input';

function App() {

  return (
    <div className="App">
      <Router>
        <Input path="/home" />
        <Input path="/:word" />
        <Input path="/:word/:textcolor/:background" />
      </Router>
    </div>
  );
};

export default App;
