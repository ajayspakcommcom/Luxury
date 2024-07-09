import { Link } from 'react-router-dom';


const Banner = (props) => {



    return (
        <div className='banner-wrapper'>
            <img src={require('../../content/images/banner/1.png')} alt='banner' img="img-responsive" />
            <div className='banner-content'>
                <h1>{props.heading}</h1>
                <ul>
                    <li><Link to={props.backUrl}>{props.backText}</Link></li>
                    <li>&gt;</li>
                    <li><Link to=''>{props.currentText}</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;