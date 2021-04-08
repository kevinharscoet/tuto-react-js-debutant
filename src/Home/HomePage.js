import React, { Component } from 'react';
import Recette from './recette'
import Loader from '../Includes/Loader'

class HomePage extends Component {
    constructor(){
        super()

        this.state = {recettes: []}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response) => this.setState({recettes: response}))
    }
    render(){
        let recettes = this.state.recettes.map((element, key) => 
        
            <Recette key={key} id={element.id} title={element.title} description={element.body}/>
        )

        return (
            <div>
                <div className="container articles-container">
                    {(recettes.length === 0) ? <Loader/> : recettes}
                </div>
            </div>
        )
    }

}

export default HomePage