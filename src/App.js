import React from 'react';
import Navbar from './layout/Navbar'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
