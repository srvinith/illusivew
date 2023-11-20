import React from 'react'
import '../Components/Hero.css'
import { Card, Accordion } from 'react-bootstrap';
import EmbarkCards from './Emabrdata'
import Carousel from "react-multi-carousel";
import testimonial from './Testimonialdata';
import faq from './Faq';
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Logo from '../images/footer-logo.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import services from './servicesdata';




const Hero = () => {
    // const boxRef = useRef(null);

    // useEffect(() => {
    //     const handleWheel = (e) => {
    //         const race = 15; // How many pixels to scroll

    //         if (e.deltaY > 0) // Scroll right
    //             boxRef.current.scrollLeft += race;
    //         else // Scroll left
    //             boxRef.current.scrollLeft -= race;

    //         e.preventDefault();
    //     };

    //     const boxElement = boxRef.current;

    //     boxElement.addEventListener('wheel', handleWheel);

    //     return () => {
    //         // Clean up the event listener when the component unmounts
    //         boxElement.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

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
                                <Card style={{ width: '20rem' }} className='cardbox' key={{ id }} loading="lazy">
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
                    <div class="box-wrapper">
                        {
                            services.map((service,i)=>
                            <figure class="shape-box shape-box_half" key={i}>
                            <img src={service.img} alt="" />
                            <div class="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                            <figcaption>
                                <div class="show-cont">
                                    {/* <h3 class="card-no"></h3> */}
                                    <h4 class="card-main-title">{service.title}</h4>
                                </div>
                                <p class="card-content">
                                {service.desc} <br /><br />
                                    <ol>
                                        <li>{service.lisOne}</li>
                                        <li>{service.lisTwo}</li>
                                        <li>{service.lisThree}</li>
                                    </ol>
                                </p>
                               
                            </figcaption>
                            <span class="after"></span>
                        </figure>
                            )
                        }
                       
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
                                    <div className="content mt-5 p-3" key={index}>
                                        <div className='card-testi'>
                                            <img src={imageUrl.img} alt='user-img' className='testi-profile' loading="lazy" />
                                            <center><h5 className='mt-5'>{imageUrl.testihead}</h5></center>
                                            <p ><span className='testiname'>{imageUrl.Name}</span><br />
                                                <span>{imageUrl.testispan}</span></p>
                                            <p>{imageUrl.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>


            </section>

            <section>
                <div className="container">
                    <h2 className='sec-title'>What Our Clients Say</h2>
                    <div className="line"></div>

                    <Accordion className='mt-5 p-2 accordion'>
                        {faq.map((faqs, i) =>
                            <Accordion.Item eventKey={faqs.id} key={i} className='accoridion-item'>
                                <Accordion.Header className='accordion-header'>
                                    {faqs.question}
                                </Accordion.Header>
                                <Accordion.Body>
                                    {faqs.answer}
                                </Accordion.Body>

                            </Accordion.Item>

                        )}

                    </Accordion>
                </div>
            </section>

            <section>
                <div id="contact">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-6">
                                <h2 className='sec-title'>Get in touch with us</h2>

                                <ul className='contact-li'>
                                    <li>
                                        <Link className="con-lis">
                                            <p className='me-3'><FaLocationDot /></p><p>CIBIE(Centre for Innovation, Business Incubation and Entrepreneurship) Dr. Mahalingam College of Engineering & Technology, MCET – NPT Campus, Udumalai Road, Pollachi – 642 003, Coimbatore</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='con-lis' to="tel:+91 99445 03455"><p className='me-3'>{<FaPhone />}</p><p>+91 99445 03455</p></Link>
                                    </li>
                                    <li>
                                        <Link className='con-lis' to='mailto:contact@illusiview.com'><p className='me-3'>{<FaEnvelope />}</p><p>contact@illusiview.com</p></Link>
                                    </li>
                                </ul>

                            </div>
                            <div className="col-md-6">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7842.032350260342!2d77.036344!3d10.655851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8370d5cf1c86f%3A0x50220f1c97a228c5!2sDr.%20Mahalingam%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sus!4v1700297111096!5m2!1sen!2sus"  className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <footer className='footer-sec'>
                <div className="container">
                    <div className="row d-flex align-items-center">

                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <img src={Logo} alt="footer-logo" className='footer-logo' />
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <h2>Follow us on</h2>
                            <p className='social-media-link'>
                                <Link to='https://www.facebook.com/illusiview' className='media-lis'>{<FaFacebook />}</Link>
                                <Link to='https://www.instagram.com/illusiview/' className='media-lis'>{<FaInstagramSquare />}</Link>
                                <Link to='https://www.youtube.com/@illusiview' className='media-lis'>{<IoLogoYoutube />}</Link>
                                <Link to='https://api.whatsapp.com/message/M5Z26VDYKDKQN1?autoload=1&app_absent=0' className='media-lis'>{<IoLogoWhatsapp />}</Link>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center p-3">
                        <p className='me-2'>© 2023 ILLUSIVIEW IMMERSIVE SOLUTIONS (OPC) PRIVATE LIMITED. All rights reserved.</p>
                        <p className='me-2'>

                        </p>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Hero