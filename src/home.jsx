import React from 'react'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Welcome from './components/home/welcome.jsx'
import Portfolio from './components/home/portfolio.jsx'
import ModernBusiness from './components/home/modernbussines.jsx'
import Header from './components/home/header.jsx'
import CallToAction from './components/home/calltoaction.jsx'

const Home = props => {

    return (

        <>
            <Navbar />

            <Header/>
                
            <div className="container">

                <Welcome />

                <h2>Portfolio Heading</h2>

                <Portfolio/>

                <ModernBusiness/>

                <hr />

            <CallToAction/>

            </div>

            <Footer />

        </>

    )

}

export default Home;

