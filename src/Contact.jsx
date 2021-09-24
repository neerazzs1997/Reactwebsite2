import React, { useState } from 'react';

const Contact = () => {

    const [data, setdata] = useState({
        fullname: "",
        addres: "",
        email: "",
        phone: "",

    });

    const EventValue = (event) => {
        const { value, name } = event.target;

        setdata((preval) => {

            return {
                ...preval, [name]: value,
            };

        });

    };

  

    const SubmitForm = (e) => {
        e.preventDefault();
        alert(` My name is ${data.fullname}, my email is ${data.email} my phone no. is ${data.phone}, My address is ${data.address} `)

    }
 

    return (
        <div>
            <h1 className="text-center"> Contact Us</h1>
            <div className="text-center">
                <form className="text-center1">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type your Name"
                            Name="fullname" value={data.fullname} onChange={EventValue} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type your Address"
                            Name="address" value={data.address} onChange={EventValue} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                            Name="email" value={data.email} onChange={EventValue} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type your phone no."
                            Name="phone" value={data.phone} onChange={EventValue} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" placeholder="About your self" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="text-center">
                        <button type="button" onClick={SubmitForm} class="btn btn-primary">Submit</button>

                    </div>

                </form>

            </div>
        </div>
    )
}

export default Contact;





