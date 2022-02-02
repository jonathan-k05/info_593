import React, { Component } from 'react';
import './App.css';
import Ajout from './Ajout';
import Search from './Search';
import Listes from './Listes';

class App extends Component {

  state = {
    id: 4,
    input1: "",
    input2: "",

    tmp: null,
    tmpT: null,
    taches: [
      { id: 1, libelle: 'Faire la modélisation', priorite: 'High' },
      { id: 2, libelle: 'Etablir le mérise', priorite: 'Medium' },
      { id: 3, libelle: 'Coder l’application', priorite: 'Low' }
    ]
  }

  render() {
    const recupT = (e) => {
      this.setState({ input1: e.target.value })
    }

    const recupP = (e) => {
      this.setState({ input2: e.target.value })
    }

    const actualise = () => {
      this.setState({
        tmpT: this.state.taches.map(tache => tache)
      })
      this.setState({
        tmp: [
          { id: this.state.id, libelle: this.state.input1, priorite: this.state.input2 }
        ]
      })
      this.setState({
        id: this.state.id + 1
      })
    }

    const add = () => {
      this.state.tmp && this.setState({
        taches: [...this.state.tmpT, ...this.state.tmp]
      })
    }

    return (
      <div>
        <Ajout funcA={add} funcT={recupT} funcPA={actualise} funcP={recupP} t={this.state.input1} p={this.state.input2} />
        <Listes t={this.state.taches} />
        <Search taches={this.state.taches} />
      </div>
    );

  }
}

export default App;
