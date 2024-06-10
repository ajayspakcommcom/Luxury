import Heading from "../Utilities/Heading";
import Icons from "../Utilities/Icons";

const Testimonial = (props) => {
    return (
        <div className='testimonials-wrapper'>
            <div className='container'>
                <Heading class='text-center' heading='Testimonials' />
                <div className='quote-wrapper'>
                    <img src={require('../../content/images/testimonial/quote.png')} />
                </div>

                <div id="testimonialCar" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">

                        <div className="item active">
                            <div className='testItem'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorillum
                                        </p>
                                        <div className="test-designation">
                                            <b>Name</b>
                                            <img src={require('../../content/images/testimonial/1.png')} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorillum
                                        </p>
                                        <div className="test-designation">
                                            <b>Name</b>
                                            <img src={require('../../content/images/testimonial/1.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className='testItem'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorillum
                                        </p>
                                        <div className="test-designation">
                                            <b>Name</b>
                                            <img src={require('../../content/images/testimonial/1.png')} />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                        <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolorillum
                                        </p>
                                        <div className="test-designation">
                                            <b>Name</b>
                                            <img src={require('../../content/images/testimonial/1.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <a className="left carousel-control" href="#testimonialCar" data-slide="prev">
                        <Icons icon='left-arrow' />
                    </a>
                    <a className="right carousel-control" href="#testimonialCar" data-slide="next">
                        <Icons icon='right-arrow' />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;