import Banner from "../../components/Banner/Banner";
import GetInTouchForm from "../../components/Utilities/GetInTouchForm";

const ContactUs = (props) => {
    return (
        <>
            <Banner heading="Contact Us" backUrl="/" backText="Home" currentText="Contact Us" />
            <div className='container'>
                <div className='get-in-touch'>
                    <GetInTouchForm />
                </div>
            </div>
        </>
    );
};

export default ContactUs;