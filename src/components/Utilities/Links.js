import { Link } from "react-router-dom";
import HeaderData from '../../content/data/header.json';

const Links = (props) => {

    let classes = `nav navbar-nav navbar-right ${props.classLink ? props.classLink : ''}`;

    return (
        <>
            <ul className={classes}>
                {HeaderData.map((item) => <li key={item.id}><Link to={`${item.url}`} className="navbar-brand">{item.text}</Link></li>)}
            </ul>
        </>
    );
};

export default Links;