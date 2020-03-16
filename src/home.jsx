import React, { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Welcome from './components/home/welcome.jsx'
import Portfolio from './components/home/portfolio.jsx'
import ModernBusiness from './components/home/modernbussines.jsx'
import Header from './components/home/header.jsx'
import CallToAction from './components/home/calltoaction.jsx'

const Home = props => {

    const [state, setState] = useState({
        gallery: [
            {
                id:1,
                image: `https://picsum.photos/200/300`,
                title: `First Slide`,
                description: `This is the description for the first slide...`
            },
            {
                id:2,
                image: `https://picsum.photos/200/300`,
                title: `Second Slide`,
                description: `This is the description for the first slide...`
            },
            {
                id:3,
                image: `https://picsum.photos/200/300`,
                title: `Third Slide`,
                description: `This is the description for the first slide...`
            }
        ]
    })

    return (
        <>
            <Navbar />
            <Header galleryData={state.gallery}/>
            <div className="container">
                <Welcome />
                <h2>Portfolio Heading</h2>
                <Portfolio />
                <ModernBusiness />
                <hr />
                <CallToAction />
            </div>
            <Footer />
        </>
    )
}
export default Home;
