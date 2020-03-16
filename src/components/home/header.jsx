import React from 'react'

const Header = props => {
    return (
        <header>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {

                        props.galleryData.map((elem, i) => {
                            return (
                                <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={(i === 0 ? "active" : "")}></li>


                            )
                        })

                    }

                </ol>

                <div className="carousel-inner" role="listbox">
                {
                    props.galleryData.map((elem, i) => {
                        return (

                                <div key={i} className={"carousel-item " + (i === 0 ? "active": "")} style={{ "backgroundImage": "url('"+elem.image+"')" }}>

                                    <div className="carousel-caption d-none d-md-block">

                                    <h3>{elem.title}</h3>

                                    <p>{elem.description}</p>

                                    </div>

                                </div>

                        )
                    })
                }
                            </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">

                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                    <span className="sr-only">Previous</span>

                </a>

                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">

                    <span className="carousel-control-next-icon" aria-hidden="true"></span>

                    <span className="sr-only">Next</span>

                </a>

            </div>

        </header>

    )
}
export default Header;