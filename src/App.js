import React from 'react';
import Navbar from './layout/Navbar'
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PostCard from './components/PostCard';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import UserProfile from './components/UserProfile';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={CreatePost} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
