import React from "react";
import { Component } from "react";
import Tache from "./Tache"

class TodoList {
  constructor(todoName, priority) {
    this._todoName = todoName;
    this._priority = priority;
  }

  get todoName(){
    return this._todoName;
  }

  get Priority(){
    return this._priority;
  }

  set newTodoName(update_todoName){
    this._todoName = update_todoName;
  }
  set newPriority(update_priority){
    this._priority = update_priority;
  }
}

class App extends Component {
  render() {
    // const todoListreal = [[null]]
    return (
      <div className="first">
        <h1>Taanjona</h1>
        <Tache />
      </div>
      )  
  }
}

export const products  = [
  {
    id: 1,
    title: 'Yellow Pail',
  },
  {
    id: 2,
    title: 'Green Pail',
  },
]

export default App;

