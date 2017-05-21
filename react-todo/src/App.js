import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header'
import TodosContainer from './containers/TodosContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <p><Link to={'/todos'}>Todo List</Link></p>
        <Header />
      <h1>Hello, and welcome to ze DAWMMm</h1>
        <Router>
          <Route expath='/' component={TodosContainer}/>
        </Router>
        </div>
    );
  }
}

export default App;
