import React from 'react';
import Icons from '../Utilities/Icons';
import Links from '../Utilities/Links';
import SocialLink from '../Utilities/SocialLink';

const Footer = (props) => {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <div className='footer-logo-wrapper'>
                        <img src={require('../../content/images/logo.png')} alt='The Luxury Company Logo' />
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                        <SocialLink />
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <h3>Useful Links</h3>
                    <Links classLink="footer-link" />
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                    <h3>Contact Us</h3>
                    <table className="table footer-table">
                        <tbody>
                            <tr>
                                <td><Icons icon='map' /></td>
                                <td>
                                    <p>
                                        <b>The Luxury Company</b>
                                        <br />
                                        Next to Adidas Showroom, Keating Road, Shillong 793001
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><Icons icon='email' /></td>
                                <td>
                                    <p className='footer-a'>
                                        <a href='mailto:theluxurycompanyinfo@gmail.com' target='_blank'>theluxurycompanyinfo@gmail.com</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td><Icons icon='phone' /></td>
                                <td>
                                    <p className='footer-a'>
                                        <a href='tel:9774080800' target='_blank'>9774080800</a> / <a href='tel:8794716620' target='_blank'>8794716620</a> / <a href='tel:8794713320' target='_blank'>8794713320</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Footer);