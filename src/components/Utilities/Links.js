import { Link } from "react-router-dom";
import HeaderData from '../../content/data/header.json';
import Icons from "./Icons";

const Links = ({ classLink, isSocialVisible = false }) => {

    let classes = `nav navbar-nav navbar-right ${classLink ? classLink : ''}`;

    return (
        <>
            <ul className={classes}>
                {HeaderData.map((item) => <li key={item.id}><Link to={`${item.url}`} className="navbar-brand">{item.text}</Link></li>)}
                {
                    isSocialVisible &&
                    <>
                        <li><Link to="https://www.facebook.com" target={"_blank"}><Icons icon='facebook' /></Link></li>
                        <li><Link to="https://www.instagram.com" target={"_blank"}><Icons icon='instagram' /></Link></li>
                        <li><Link to="https://www.linkedin.com" target={"_blank"}><Icons icon='linkedin' /></Link></li>
                    </>
                }
            </ul>
        </>
    );
};

export default Links;