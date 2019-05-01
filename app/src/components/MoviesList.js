import React from 'react'
import Movie from './Movie'

class MoviesList extends React.Component {
    state = {
        movies: [
            { title: 'Titanic', year: 1998 },
            { title: 'La Haine', year: 1995 },
            { title: 'Le Cinquième Element', year: 1997 }
        ]
    }

    handleClick = (index) => {
        const { movies } = this.state
        this.setState({
            movies: movies.filter((el, i) => i !== index)
        })
    }

    render() {
        const { movies } = this.state
        const movieElements = movies.map((el, i) => {
            // return <li key={i}>{el}</li>
            return <Movie deleteMovie={() => this.handleClick(i)} data={el} key={i}></Movie>
            // return <Movie title={el.title} year={el.year} key={i}></Movie>
        })

        return (
            <ul>
                {movieElements}

                {/* {movies.map((el, i) => (
                    <Movie data={el} key={i} />
                ))} */}
            </ul >
        )
    }
}

export default MoviesList