

const Heading = (props) => {

    let classes = `${props.class ? props.class : ''}`;

    return (
        <>
            <h2 className={classes}>{props.heading}</h2>
        </>
    );
};

export default Heading;