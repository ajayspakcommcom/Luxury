import React from 'react';

const TestimonialItem = ({ data, indx }) => {

    return (
        <>
            <div className={`item ${indx === 0 ? 'active' : ''}`}>
                <div className='testItem'>
                    <div className='row'>
                        {data.map((item, index) => (
                            <div key={index} className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                <p>{item.text}</p>
                                <div className="test-designation">
                                    <b>{item.name}</b>
                                    <img src={item.imgUrl} alt="Testimonial" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialItem;
