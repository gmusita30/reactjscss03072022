import React from 'react'
import '../Styles/Sat.css'
import Reactclass from '../assets/img6.png'
import Sb from '../assets/img1.jpg'
import Sb1 from '../assets/img2.jpg'

const Sat = () => {
    return(
        <>
        <section className='saturday'>
        <h1 className='sath1'>What I did last Saturday:</h1>
        <p id='satdesc'>Last Saturday, I attended my scheduled 7:30 am saturday class about React JS and I learned about React Components from the discussion.</p>
        
        <div className='satclasspic'>
            <img src={Reactclass} alt='react class' width='650' height='400'/>
        </div>

        <br></br><br></br><br></br>
        <p id='satdesc'>In the afternoon at 4:00 pm, I met with my friends and had coffee at Starbucks</p>

        <div className='satclasspic'>
            <img src={Sb} alt='react class' width='650' height='500'/>
            <br></br>
        </div>

        <div className='satclasspic1'>
            <img src={Sb1} alt='react class' width='350' height='500'/>
            <br></br>
        </div>
        </section>
        </>
    )
}


export default Sat