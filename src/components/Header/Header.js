import { Link, useLocation } from "react-router-dom";
import Logo from '../../content/images/logo.svg';
import Links from "../Utilities/Links";
import React, { useEffect, useState } from "react";
import { generateTitle } from "../../utility/Common";

const Header = (props) => {

    const [headerClass, setHeaderClass] = useState('');
    const location = useLocation();

    useEffect(() => {

        const pathName = location.pathname;
        document.title = generateTitle(pathName);
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
                        <button type="button" className="navbar-tseoggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand"><img src={Logo} /></Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar"><Links isSocialVisible={true} /></div>
                </div>
            </nav>
        </header>
    );
};

export default React.memo(Header);