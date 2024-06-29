import React, { useState } from 'react';
import Heading from './Heading';

const GetInTouchForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    let errorContent = '';

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    };

    const subjectChangeHandler = (event) => {
        setSubject(event.target.value);
    };

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    };


    const onSaveDataHandler = (event) => {
        event.preventDefault();
        if ((name.trim().length > 0) && (email.trim().length > 0) && (phone.trim().length > 0) && (subject.trim().length > 0) && (message.trim().length > 0)) {
            errorContent = '';
        } else {
            errorContent = <p className='error-text'>Please enter a value</p>;
        }
        setError(errorContent);
    };

    return (
        <div>
            {error}
            <form className='row' onSubmit={onSaveDataHandler}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <Heading heading='Get in touch' />
                    <div className='row'>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="uName" placeholder="Name" onChange={nameChangeHandler} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="uEmail" placeholder="Email" onChange={emailChangeHandler} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="uPhone" placeholder="Phone" onChange={phoneChangeHandler} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <input type="text" className="form-control" id="uSubject" placeholder="Subject" onChange={subjectChangeHandler} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Message" onChange={messageChangeHandler}></textarea>
                            </div>
                            <div className='form-btn-wrapper'>
                                <button type="submit" className="btn btn-default">Send us a message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img className="img-responsive" src={require('../../content/images/home/form.png')} alt="Chania" />
                </div>

            </form>
        </div>
    );
};

export default GetInTouchForm