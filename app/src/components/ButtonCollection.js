import React from 'react'

const ButtonCollection = () => {
    const BulmaClasses = {
        isWhite: "is-white",
        isWarning: "is-warning"
    }

    const buttonList = Object.keys(BulmaClasses).map(el => {
        const className = 'button' + BulmaClasses[el]
        return <button className={className}>{el}</button>
    })

    return (
        <div>
            {buttonList}
        </div>
    )
}

export default ButtonCollection