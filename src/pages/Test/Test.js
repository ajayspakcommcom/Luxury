import { useEffect } from 'react';
import { initLightboxJS } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox } from 'lightbox.js-react'
import Banner from "../../components/Banner/Banner";

const Test = (props) => {

    useEffect(() => {
        initLightboxJS("Insert your License Key here", "Insert plan type here");
    }, []);

    return (
        <>
            <Banner heading="Contact Us" backUrl="/" backText="Home" currentText="Contact Us" />
            <div className='container'>

                <SlideshowLightbox className="container grid grid-cols-3 gap-2 mx-auto">
                    <img className="w-full rounded" src="pdf/1.png" />
                    <img className="w-full rounded" src="pdf/2.png" />
                    <img className="w-full rounded" src="pdf/3.png" />
                    <img className="w-full rounded" src="pdf/4.png" />
                    <img className="w-full rounded" src="pdf/5.png" />
                    <img className="w-full rounded" src="pdf/7.png" />
                </SlideshowLightbox>

            </div>
        </>
    );
};

export default Test;