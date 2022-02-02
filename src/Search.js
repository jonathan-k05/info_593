import React, { useState } from 'react'
import "./style.css"

function Search({ taches }) {

    const [search, setSearch] = useState("")
    const [res, setRes] = useState("")
    const [result, setResult] = useState(null)

    const recupS = (e) => {
        setSearch(e.target.value)
        setRes(taches.filter(tache => tache.priorite === search))
        res && setResult(res.map(tache => (
            <li key={tache.id}>{tache.libelle}</li>
        )))
    }


    return (

        <div>
            <div className="search_container">
                <input onChange={recupS} placeholder="Search Priorité……………" value={search}></input>
            </div>
            <ul>
                {result}
            </ul>
        </div>
    )
}

export default Search
