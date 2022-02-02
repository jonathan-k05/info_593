import React from 'react'
import "./style.css"

function Ajout(props) {
    return (
        <div className="ajout_container">
            <input onChange={props.funcT} placeholder="Saisir votre todo………………………………" value={props.t}></input>
            <input onChange={props.funcP} placeholder="Priorité……………" value={props.p}></input>
            <button onClick={props.funcPA}>PreAjout</button>
            <button onClick={props.funcA}>Ajouter</button>
        </div>
    )
}

export default Ajout
