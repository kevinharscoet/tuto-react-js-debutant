import React from 'react'
import { Link } from 'react-router-dom'


const Recette = (props) =>
    <Link className="article" to={"/recette/"+props.id}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </Link>

    export default Recette