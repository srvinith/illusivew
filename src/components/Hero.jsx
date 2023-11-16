import React from 'react'
import '../Components/Hero.css'
import Card from 'react-bootstrap/Card';
import EmbarkCards from './Emabrdata'


const Hero = () => {
    return (
        <>

            <div className="hero" id='hero'>
                <div className="main-hero-sec">
                    <div className="hero-text">
                        <h1>ILLUSIVIEW IMMERSIVE SOLUTIONS</h1>
                        <h6>Transforming the way you experience the digital world</h6>
                        <p></p>
                        <p></p>
                    </div>
                </div>

            </div>


            <section className='' id='embark'>
                <div className="container">
                    <h2 className='sec-title'>Embark on an experiential revolution with Illusiview</h2>
                    <div className="line"></div>

                    <div className="embark-card-con ">
                        {
                            EmbarkCards.map((embak,id)=>
                                <Card style={{ width: '20rem' }} className='cardbox' key={{id}}>
                                <Card.Img variant="top" src=
                                {embak.cardImg} />
                                <Card.Body>
                                    <Card.Title>{embak.CardTitle}</Card.Title>
                                    <Card.Text>
                                       {embak.carddesc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            )
                        }
                    </div>
                </div>


            </section>
            <section className='' id='services'>
                <div className="container">
                    <h2 className='sec-title'>Explore Our wide range of services to meet your needs</h2>
                    <div className="line"></div>

                </div>


            </section>

        </>
    )
}

export default Hero