import { Link } from "react-router-dom";
import Icons from "./Icons";


const SocialLink = (props) => {
    return (
        <>
            <ul className='social-link'>
                {/* <li><Link to="https://twitter.com" target={"_blank"}><Icons icon='twitter' /></Link></li>
                <li><Link to="https://www.facebook.com" target={"_blank"}><Icons icon='facebook' /></Link></li> */}
                <li><Link to="https://www.instagram.com" target={"_blank"}><Icons icon='instagram' /></Link></li>
                <li><Link to="https://www.linkedin.com" target={"_blank"}><Icons icon='linkedin' /></Link></li>
            </ul>
        </>
    );
};

export default SocialLink;