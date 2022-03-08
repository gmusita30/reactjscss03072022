import React from 'react'
import '../Styles/Home.css'

const Home = () => {
    return (
        <>
        <section className='home'>
            <div className="container home-container p-5 my-auto">
                <div className="jumbotron container text-center">
                    <p className="display-4 font-weight-bold header-title">What I did this Weekend</p>
                    <hr className="my-4 hr-style" />
                    <h3 className='quote'>“I really need a day between Saturday and Sunday”</h3>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home