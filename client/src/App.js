import React, {Component} from 'react';
import './App.css';
import Menu from './components/Menu';
import Post from './components/Post'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <Post />
      </div>
    );
  }
}

export default App;
