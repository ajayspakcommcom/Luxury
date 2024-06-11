import Icons from '../Utilities/Icons';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';

const Carousel = (props) => {



    return (

        <div id={props.id} className="carousel slide" data-ride="carousel">

            {false && <ol className="carousel-indicators">
                {props.carouselData.map((item, indx) => { return <CarouselIndicator key={item.id} dataTarget={props.id} dataSlideTo={item.id} class={indx === 0 ? 'active' : ''} /> })}
            </ol>}

            <div className="carousel-inner">

                {
                    props.carouselData.map((item, indx) => {
                        return (<CarouselItem key={item.id} class={indx === 0 ? 'item active' : 'item'} src={item.imgUrl} smallText={item.smallText} bigText={item.bigText} />);
                    })
                }

                <a className="left carousel-control" href={`#${props.id}`} data-slide="prev">
                    {false && <>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">{props.prevText}</span>
                    </>
                    }
                    <Icons icon='left-arrow' />
                </a>
                {true && <a className="right carousel-control" href={`#${props.id}`} data-slide="next">
                    {
                        false && <>
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">{props.nextText}</span>
                        </>
                    }
                    <Icons icon='right-arrow' />
                </a>}
            </div>

        </div>
    );

};

export default Carousel;
