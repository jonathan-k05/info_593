import React, { useState } from "react";
import {products} from "./App";

function Tache() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("");
  const [todoName, setTodoName] = useState("");
  
  const Ajouter = (e) => {
    e.preventDefault();
    console.log(todoName + ' : ' + priority);
  }

  const selectPriority = (e) => {
    setPriority(e.target.value)
  }

  console.log(products);
  
  return (
    <form onSubmit={Ajouter}>
      <label>
        <input
          type="text"
          placeholder="Saisir votre todo:"
          value={todoName}
          onChange={e => setTodoName(e.target.value)}
        />
      </label>
      <select onChange={selectPriority}>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='low'>low</option>
      </select>
    <button type="submit"> Ajouter </button>
    </form>
  );
}

export default Tache;