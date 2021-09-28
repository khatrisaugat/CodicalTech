import React, { useState, useEffect } from 'react';
import Button from "./Button";
import { Alert } from 'react-bootstrap';

function Form() {
    const handleChange = (e) => {
        let dataTitle = e.target.getAttribute("name");
        // document.querySelectorAll('.alertMessage').forEach((message) => {
        //     if (message.classList.contains(dataTitle)) {
        //         message.style.display = 'block';
        //     }
        // })
        // console.log(e.target.getAttribute("name"));
        setData(prevState => ({
            ...prevState,
            [dataTitle]: e.target.value
        }));
    }
    const showError = (ErrName) => {
        document.querySelectorAll('.alertMessage').forEach((message) => {
            if (message.classList.contains(ErrName)) {
                message.style.display = 'block';
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("no error");
        }
        console.log(error);
        // if (error.nameError === '' && error.emailError === '' && error.subjectError === '' && error.messageError === '') {
        //     // console.log(e.target.submit());
        //     const formData = new FormData(e.target);
        //     const ajax_request = new XMLHttpRequest();
        //     ajax_request.open('POST', 'http://localhost/php12pm/formDataPrint.php');
        //     ajax_request.send(formData);
        // }
    }
    //form validation
    const validateForm = () => {
        let valid = true;
        if (/^[a-zA-Z ]+$/.test(data.name) === false) {
            valid = false;
            setError(prevError => ({
                ...prevError,
                nameError: "Hint: Name format incorrect"
            }))
        } else {
            setError(prevError => ({
                ...prevError,
                nameError: ""
            }))
        }
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email) === false) {
            valid = false;
            setError(prevError => ({
                ...prevError,
                emailError: "Hint: Email format incorrect"
            }))
        } else {
            setError(prevError => ({
                ...prevError,
                emailError: ""
            }))
        }
        if (data.subject === '') {
            valid = false;
            setError(prevError => ({
                ...prevError,
                subjectError: "Hint: Subject cannot be left empty"
            }))
        } else {
            setError(prevError => ({
                ...prevError,
                subjectError: ""
            }))
        }
        if (data.message === '') {
            // valid = false;
            // setError(prevError => ({
            //     ...prevError,
            //     messageError: "Hint: Message cannot be left empty"
            // }))
        }
        else {
            setError(prevError => ({
                ...prevError,
                messageError: ""
            }))
        }
        return valid;
    }
    const [error, setError] = useState({
        nameError: '',
        emailError: '',
        subjectError: '',
        messageError: '',
        error: 0
    });
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    //on every change of state data
    useEffect(() => {
        if (error.nameError !== '') {
            showError('name');
        } else if (error.emailError !== '') {
            showError('email');
        } else if (error.subjectError !== '') {
            showError('subject');
        } else if (error.subjectError !== '') {
            showError('message');
        }
    }, [error]);
    return (
        <div className="contact-form">
            <form name="login" className="form" onSubmit={handleSubmit}>
                {/* <div className="row"> */}
                <div className="input-control">
                    <input type="text" name="name" className="input-field" placeholder="Name" onChange={handleChange} value={data.name} />
                    <label htmlFor="name" className="input-label">Name</label>

                </div>
                <div className="alertMessage name">
                    {error.nameError !== '' ? <Alert variant="warning">{error.nameError}</Alert> : ''}
                </div>
                <div className="input-control">
                    <input type="email" name="email" className="input-field" placeholder="Email Address" onChange={handleChange} value={data.email} />
                    <label htmlFor="email" className="input-label">Email Address</label>

                </div>
                <div className="alertMessage email">
                    {error.emailError !== '' ? <Alert variant="warning">{error.emailError}</Alert> : ''}
                </div>
                {/* </div> */}
                <div className="input-control">
                    <input type="text" name="subject" className="input-field" placeholder="Subject" onChange={handleChange} value={data.subject} />
                    <label htmlFor="Subject" className="input-label">Subject</label>
                </div>
                <div className="alertMessage subject">
                    {error.subjectError !== '' ? <Alert variant="warning">{error.subjectError}</Alert> : ''}
                </div>
                <div className="input-control">
                    <textarea name="message" id="message" cols="30" rows="5" className="input-field" placeholder="Message" onChange={handleChange} value={data.message}></textarea>
                    <label htmlFor="message" className="input-label">Message</label>
                </div>

                <div className="alertMessage message">
                    {error.messageError !== '' ? <><br /><br /><br /><br /><br /><Alert variant="warning">{error.messageError}</Alert></> : ''}
                </div>

                <div className="actions" style={{ marginTop: "7rem" }}>
                    <Button title="Send" type="submit" disabledBtn="disabledBtn" />
                </div>
            </form>
        </div>
    )
}

export default Form