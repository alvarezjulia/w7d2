import React from 'react'

class User extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         user: {
    //             firstName: 'Julia',
    //             lastName: 'Alvarez'
    //         }
    //     }
    // }

    // state = {
    //     user: {
    //         firstName: 'Julia',
    //         lastName: 'Alvarez'
    //     }
    // }

    // state = {
    //     user: {
    //         firstName: this.props.firstName,
    //         lastName: this.props.lastName,
    //         buttonText: 'Click me!'
    //     }
    // }

    // handleClick = () => {
    //     const newState = {
    //         user: {
    //             firstName: this.state.user.firstName.toUpperCase(),
    //             lastName: this.state.user.lastName.toUpperCase()
    //         }
    //     }
    //     this.setState(newState)
    // }

    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        buttonText: 'Click me!',
        clicked: 0

    }

    handleClick = () => {
        const { firstName, lastName, buttonText } = this.state
        let { clicked } = this.state

        if (buttonText === 'Click me!') {
            const newState = {

                firstName: firstName.toUpperCase(),
                lastName: lastName.toUpperCase(),
                buttonText: 'Do not click me',
                // clicked: clicked + 1
                clicked: ++clicked

            }
            this.setState(newState)
        } else {
            const newState = {

                firstName: this.state.firstName.toLowerCase(),
                lastName: this.state.lastName.toLowerCase(),
                buttonText: 'Click me!',
                clicked: clicked + 1

            }
            this.setState(newState)
        }
    }

    // handleClick = () => {
    //     const { firstName, lastName, buttonText, clicked } = this.state

    //     this.setState({
    //         firstName: this.state.firstName === this.state.firstName.toLowerCase() ? firstName.toUpperCase() : firstName.toLowerCase(), clicked: clicked + 1
    //     })
    // }

    render() {
        const { firstName, lastName, buttonText, clicked } = this.state
        return (
            <div>
                <h2>{firstName} {lastName}</h2>
                <h4>{clicked}</h4>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default User