import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Menu from './components/Menu';
import PostList from './components/PostList'
import About from './components/About';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostList />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
