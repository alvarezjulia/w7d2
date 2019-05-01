import React from 'react'

class Movie extends React.Component {
    render() {
        const { title, year } = this.props.data
        const { deleteMovie } = this.props


        return (
            <>
                <h2>{title}</h2>
                <p>released in: {year}</p>
                <button onClick={deleteMovie}>Delete</button>
            </>
        )
    }
}

export default Movie