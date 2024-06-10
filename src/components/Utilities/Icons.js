

const Icons = (props) => {

    let content = null;
    //
    switch (props.icon) {
        case 'twitter': content = <img src={require('../../content/images/icons/twitter.png')} className='icon' />;
            break;
        case 'phone': content = <img src={require('../../content/images/icons/phone.png')} className='icon' />;
            break;
        case 'map': content = <img src={require('../../content/images/icons/map.png')} className='icon' />;
            break;
        case 'linkedin': content = <img src={require('../../content/images/icons/linkedin.png')} className='icon' />;
            break;
        case 'instagram': content = <img src={require('../../content/images/icons/instagram.png')} className='icon' />;
            break;
        case 'facebook': content = <img src={require('../../content/images/icons/facebook.png')} className='icon' />;
            break;
        case 'email': content = <img src={require('../../content/images/icons/email.png')} className='icon' />;
            break;
        case 'left-arrow': content = <img src={require('../../content/images/icons/left.png')} className='icon-arrow' />;
            break;
        case 'right-arrow': content = <img src={require('../../content/images/icons/right.png')} className='icon-arrow' />;
            break;
    }

    return (
        <>
            {content}
        </>
    );
};

export default Icons;