import React from 'react'
import WelcomeCard from './welcomecard.jsx'

const Welcome = props => {
    return (
        <>
            <h1 className="my-4">Welcome to Modern Business</h1>

            <div className="row">
                <WelcomeCard />
                <WelcomeCard />
                <WelcomeCard />
            </div>
        </>
    )
}
export default Welcome;