import Banner from "../../components/Banner/Banner";

const Test = (props) => {
    return (
        <>
            <Banner heading="Contact Us" backUrl="/" backText="Home" currentText="Contact Us" />
            <div className='container'>
                <div className='get-in-touch'>
                    <button>Pay Now</button>
                </div>
            </div>
        </>
    );
};

export default Test;