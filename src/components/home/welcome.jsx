import React, {state} from 'react'
import WelcomeCard from './welcomecard.jsx'

const Welcome = props => {
    return (
        <>
            <h1 className="my-4">{props.info.title}</h1>

            <div className="row">{
                props.info.cardInfo.length > 0 &&
                props.info.cardInfo.map((item,i)=><WelcomeCard key={i} datos={item}/>)
            }
            </div>
        </>
    )
}
export default Welcome;