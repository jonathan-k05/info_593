import React, { useState } from 'react'
import "./style.css"

function Listes(props) {

    const [check, setCheck] = useState(false)

    const checker = check ? 1 : 0

    const changeCheck = () => {
        setCheck(!check)
    }

    const taches = props.t && props.t.map(tache => (
        <tr key={tache.id}>
            <td onClick={changeCheck}>{checker}</td>
            <td>{tache.libelle}</td>
            <td>{tache.priorite}</td>
        </tr>
    ))

    return (
        <div>
            <button className="btn_supp">Supprimer</button>
            <table>
                <thead>
                    <tr>
                        <td>Cocher tout</td>
                        <td>TACHES</td>
                        <td>PRIORITE</td>
                    </tr>
                </thead>
                <tbody>
                    {props.t && taches}
                </tbody>
            </table>
        </div>
    )
}

export default Listes
