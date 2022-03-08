import React from 'react'
import '../Styles/Sun.css'
import Bike from '../assets/img5.jpg'
import Me from '../assets/img3.jpg'
import Church from '../assets/img4.jpg'


const Sun = () => {
    return(
        <>
        <section className='sunday'>
        <h1 className='sunh1'>What I did last Sunday:</h1>
        <p id='sundesc'>Last Sunday, As part of my sunday routine, I rode my bike and left the house at 6:00 am in order for me to go to Antipolo Cathedral so I can attend the sunday mass and also to accomplish my goal of covering a 30 kilometer bike ride for the day.</p>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top img-fluid" src={Me}   alt="Selfie at Antipolo Cathedral" />
                        <div className="card-body">
                            <h5 className="card-title">Selfie</h5>
                            <p className="card-text">Here is a photo of me at the Antipolo Cathedral</p>
                          
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{width: "20rem",}}>
                    <img className="card-img-top img-fluid" src={Bike}   alt="Pic of bike at Antipolo Cathedral" />
                        <div className="card-body">
                            <h5 className="card-title">Bike</h5>
                            <p className="card-text">Here is a photo of my bike at the Antipolo Cathedral</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card" style={{width: "20rem"}}>
                    <img className="card-img-top img-fluid" src={Church}   alt="Pic of Antipolo Cathedral" />
                        <div className="card-body">
                            <h5 className="card-title">Antipolo Cathedral</h5>
                            <p className="card-text">Here is a photo of Antipolo Cathedral last sunday</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}


export default Sun