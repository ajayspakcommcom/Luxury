const AboutUs = (props) => {
    return (
        <div className='about-wrapper'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <h2>Hair Care & Styling</h2>
                        <p>
                            From classic haircuts and trims to advanced treatments such as smoothening, Botox, and keratin treatments, we provide a full spectrum of hair services. Our offerings include hair coloring, highlighting, perming, and creative hair coloring tailored to your preferences. For those seeking a complete transformation, our premium hair treatments and hair spas promise to rejuvenate and revitalize your hair, leaving it looking and feeling its best.
                        </p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <img src={require('../../content/images/about/1.png')} alt="about us" className='img-responsive' />
                    </div>
                </div>
            </div>

            <div className="hair-care-style">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Hair Care & Styling</h2>
                            <p>From classic haircuts and trims to advanced treatments such as smoothening, Botox, and keratin treatments, we provide a full spectrum of hair services. Our offerings include hair coloring, highlighting, perming, and creative hair coloring tailored to your preferences. For those seeking a complete transformation, our premium hair treatments and hair spas promise to rejuvenate and revitalize your hair, leaving it looking and feeling its best.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="skin-facial-treatment">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Skin & Facial Treatments</h2>
                            <p>Our skin services range from basic facials and clean-ups to advanced anti-aging treatments and premium facials. We offer hydra facials, peels, and specialized treatments like face firming and skin purifying to address various skin concerns. With a focus on both relaxation and results, our treatments are designed to enhance your natural beauty and promote a youthful, radiant complexion.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="waxing-hair-removal">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Waxing & Hair Removal</h2>
                            <p>TLC provides a variety of waxing and hair removal options, including traditional waxing, threading, and laser hair removal. Our services cover all areas, ensuring smooth and hair-free skin from head to toe. For a more permanent solution, our laser hair removal uses state-of-the-art technology for precise and pain-free results.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="nail-lash-service">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Nail & Lash Services</h2>
                            <p>Our nail services include manicures, pedicures, nail extensions, and gel polish applications. Whether you prefer a classic look or something more creative, our expert nail technicians will ensure your nails look flawless. Additionally, we offer lash extensions, lash lifting, and eyebrow shaping to enhance your natural features and provide a polished, finished look.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="massage-body-treatment">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Massage & Body Treatments</h2>
                            <p>Indulge in our range of massage therapies, including aroma, Swedish, deep tissue, and Ayurveda massages. Our body treatments, such as body polish and reflexology, are designed to relax and rejuvenate your body, mind, and spirit. For targeted relief, our neck, shoulder, and back massages offer concentrated care to alleviate tension and stress.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="makeup-bridal-service">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>Makeup & Bridal Services</h2>
                            <p>TLC provides professional makeup services for every occasion, from light makeup to full bridal makeovers. Our skilled makeup artists use high-quality products and techniques to enhance your natural beauty, ensuring you look and feel stunning. We also offer hairdos, saree draping, and eye makeup services to complete your look for any special event.</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;