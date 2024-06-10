import { Link } from "react-router-dom";
import Logo from '../../content/images/logo.png';
import Links from "../Utilities/Links";
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

const Header = (props) => {

    const [headerClass, setHeaderClass] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.substring(1).length > 0) {
            setHeaderClass('black-header');
        } else {
            setHeaderClass('');
        }
    }, [location]);

    const classes = headerClass;

    return (
        <header className={classes}>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand"><img src={Logo} /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <Links />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;