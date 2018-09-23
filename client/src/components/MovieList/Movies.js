import React, { Component } from 'react';

export default class Movies extends Component {

    componentDidMount() {
        this.props.getAllMovies()
    }

    render() {
    
        let movieList = this.props.movies.movies.map( m => (
            <div key={m._id} >
                <img src={m.poster} alt=""/>
               <p><strong>Title:</strong> {m.title} </p> 
               <p><strong>Actors:</strong> {m.actors} </p> 
                <br />
                <hr />
            </div>
        ))

        return (
            <div>
                <h1>List of Movies</h1>
                {movieList}
            </div>
        );
    }
}