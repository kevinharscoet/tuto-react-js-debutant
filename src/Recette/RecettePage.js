import React, { Component } from 'react';
import Comment from './Comment'
import profileImage from '../Images/profile.png'
import Loader from '../Includes/Loader'

class RecettePage extends Component {
    constructor(){
        super()

        this.state = {
            recette: [], 
            comments: []
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
        .then((response) => response.json())
        .then((response) => this.setState({recette: response}))

        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then((response) => response.json())
        .then((response) => this.setState({comments: response}))
    }
    render(){

        let comments = this.state.comments.map((element, key) =>
              <Comment key={key} email={element.email} comment={element.body} src={profileImage}/>      
        )

        return (
            <div className="container recette-container">
                <div className="recette">
                {(this.state.recette.length === 0) ? <Loader/> : 
                <div>
                    <h2>{this.state.recette.title}</h2>
                    <p>{this.state.recette.body}</p>    
                </div>}
                </div>
                <div className="comments-container">
                    <h2 className="comments-title">Commentaires</h2>
                    {(comments.length === 0) ? <Loader/> : comments}
                </div>
            </div>
        )
    }

}

export default RecettePage