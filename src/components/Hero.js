import React from 'react'
import './Hero.css'
import Embarkcard from './embarkcard'

const Hero = () => {
    return (
        <>
        <div className='hero' id='hero'>
            <div className='content'>
                <p></p>
                <p></p>
                <p>Immersive Solutions</p>
                <p>Transforming the way you experience the digital world</p>
                <button href='/' className='button'>Free Consultation</button>
            </div>
        </div>

        <Embarkcard />
        </>
    )
}

export default Hero
