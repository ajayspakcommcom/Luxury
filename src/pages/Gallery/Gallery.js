import LightBoxGallery from "../../components/LightBoxGallery/LightBoxGallery";

const imageSources = ['pdf/1.png', 'pdf/2.png', 'pdf/3.png', 'pdf/4.png', 'pdf/5.png', 'pdf/7.png'];

const Gallery = (props) => {
    return (
        <>
            <div className="gallery-wrapper">
                <LightBoxGallery images={imageSources} />
            </div>
        </>
    );
};

export default Gallery;