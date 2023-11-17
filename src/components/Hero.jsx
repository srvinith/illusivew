import React, { useRef, useEffect } from 'react'
import '../Components/Hero.css'
import Card from 'react-bootstrap/Card';
import EmbarkCards from './Emabrdata'
import Card1 from '../images/card-img-1.jpeg'
import Carousel from "react-multi-carousel";
import testimonial from './Testimonialdata';


const Hero = () => {
    const boxRef = useRef(null);

    useEffect(() => {
        const handleWheel = (e) => {
            const race = 15; // How many pixels to scroll

            if (e.deltaY > 0) // Scroll right
                boxRef.current.scrollLeft += race;
            else // Scroll left
                boxRef.current.scrollLeft -= race;

            e.preventDefault();
        };

        const boxElement = boxRef.current;

        boxElement.addEventListener('wheel', handleWheel);

        return () => {
            // Clean up the event listener when the component unmounts
            boxElement.removeEventListener('wheel', handleWheel);
        };
    }, []);


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 768 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 767, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     

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
                            EmbarkCards.map((embak, id) =>
                                <Card style={{ width: '20rem' }} className='cardbox' key={{ id }}>
                                    <Card.Img className='card-img' variant="top" src=
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
                    <div className="box-scroll" ref={boxRef}>
                        <div className="scroll-row">
                            <div className="cards">
                                <div className="row card-lis">
                                    <div className="col-md-6">
                                        <img src={Card1} alt="" className='' style={{ width: '20rem' }} />
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-row">
                            <div className="cards">
                                <div className="row card-lis">
                                    <div className="col-md-6">
                                        <img src={Card1} alt="" className='' style={{ width: '20rem' }} />
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-row">
                            <div className="cards">
                                <div className="row card-lis">
                                    <div className="col-md-6">
                                        <img src={Card1} alt="" className='' style={{ width: '20rem' }} />
                                    </div>
                                    <div className="col-md-6">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
            <section className='' id='testimonial'>
                <div className="container">
                    <h2 className='sec-title'>What Our Clients Say</h2>
                    <div className="line"></div>
                    <div className="parent">
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            swipeable={true}
                            draggable={true}
                            showDots={true}
                            infinite={true}
                            partialVisible={false}
                            dotListClass="custom-dot-list-style"
                        >
                            {testimonial.map((imageUrl, index) => {
                                return (
                                    <div className="slider" key={index}>
                                        <img src={imageUrl.url} alt="movie" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>


            </section>

        </>
    )
}

export default Hero