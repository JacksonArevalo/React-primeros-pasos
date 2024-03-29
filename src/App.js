import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Component/navigation';

import { todos } from './todos.json';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge bagde-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p>
              <p><mark>{ todo.responsible }</mark></p>
            </div>
          </div>
        </div>
      )
    }) 

    return (
      <div className="App">
        <Navigation title="mi primera navegación"/>
        <div className="container">
          <div className="row mt-4">
            { todos }
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
