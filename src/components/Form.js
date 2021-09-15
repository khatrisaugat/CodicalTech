import React, { useState } from 'react';
import Button from "./Button";

function Form() {
    const handleChange = (e) => {
        // console.log(e.target.getAttribute("name"));
        let dataTitle = e.target.getAttribute("name");
        setData(prevState => ({
            ...prevState,
            [dataTitle]: e.target.value
        }));
    }
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    return (
        <div className="contact-form">
            <form name="login" className="form">
                {/* <div className="row"> */}
                <div className="input-control">
                    <input type="text" name="name" className="input-field" placeholder="Name" onChange={handleChange} value={data.name} />
                    <label htmlFor="name" className="input-label">Name</label>
                </div>
                <div className="input-control">
                    <input type="email" name="email" className="input-field" placeholder="Email Address" onChange={handleChange} value={data.email} />
                    <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                {/* </div> */}
                <div className="input-control">
                    <input type="text" name="subject" className="input-field" placeholder="Subject" onChange={handleChange} value={data.subject} />
                    <label htmlFor="Subject" className="input-label">Subject</label>
                </div>
                <div className="input-control">
                    <textarea name="message" id="message" cols="30" rows="5" className="input-field" placeholder="Message" onChange={handleChange} value={data.message}></textarea>
                    <label htmlFor="message" className="input-label">Message</label>
                </div>
                <div className="actions" style={{ marginTop: "7rem" }}>
                    <Button title="Send" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form