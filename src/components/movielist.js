import React from "react";
// import { ReactDOM } from "react";

export default class Movielist extends React.Component {
    render() {
        //getMovies().then((data) => console.log(data))

        return (
            <ul>
               {this.props.movies.map((movie) => <li>{movie.original_title}</li>)}
            </ul>
            
        )
    }
}