
const CarouselIndicator = (props) => {
    return (
        <>
            <li data-target={`#${props.dataTarget}`} data-slide-to={props.dataSlideTo} className={props.class}></li>
        </>
    );
};

export default CarouselIndicator;