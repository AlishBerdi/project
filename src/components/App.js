import React from 'react';
import { getMovies } from '../services/movieapi';
import Movielist from './movielist';
export default class App extends React.Component {
    state = {
        movies: []
    }
    componentDidMount () {
        console.log('componentDidMount')
         getMovies().then((data) => {
            this.setState({
                movies: data.results
            })
         })
    }
    componentDidUpdate() {
        
    }

    render() {
        // getMovies().then((data) => console.log(data))
        console.log('render')

        return (
            <div>
                <h1> Список фильмов</h1>

                <Movielist movies={this.state.movies}/>
            </div>
        )
    }
}