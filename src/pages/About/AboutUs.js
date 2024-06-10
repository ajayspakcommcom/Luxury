const AboutUs = (props) => {
    return (
        <div className='about-wrapper'>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam </h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <img src={require('../../content/images/about/1.png')} alt="about us" className='img-responsive' />
                    </div>
                </div>
            </div>

            <div className="about-what">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <img src={require('../../content/images/about/2.png')} alt="about us" className='img-responsive' />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h2>What we are </h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;