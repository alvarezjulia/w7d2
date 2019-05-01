//button should change color to a new color on click
//1 => LIKE
//0 and 2+ => LIKEs

import React from 'react'

class User extends React.Component {

    state = {
        clicked: 0,
        label: 'LIKES',
        color: this.props.color
    }

    handleClick = () => {
        let { clicked } = this.state
        let colorsArr = ["red", "green", "blue", "white", "orange"]

        this.setState({
            clicked: ++clicked,
            label: clicked === 1 ? 'LIKE' : 'LIKES',
            color: colorsArr[clicked % colorsArr.length]
        })

    }

    render() {
        let { clicked, label, color } = this.state

        return (
            <div>
                <h2>{label} : {clicked}</h2>
                <button style={{ background: color }} onClick={this.handleClick}>Magic</button>
            </div>
        )
    }

}


export default User