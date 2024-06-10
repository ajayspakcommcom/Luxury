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
                                <td><p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p></td>
                            </tr>
                            <tr>
                                <td><Icons icon='email' /></td>
                                <td><p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p></td>
                            </tr>
                            <tr>
                                <td><Icons icon='phone' /></td>
                                <td><p>8652248919</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Footer;