import React from "react";
import "./style/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} ,My emailId is ${data.email}`
    );
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className=" my-5 col-12 apply-now-box">
              <h4>Want to study at The Global School</h4>
            </div>
            <div className="contact-box col-10 col-md-6 mx-auto">
              <form onSubmit={formSubit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Full name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={inputEvent}
                  ></textarea>
                </div>
                <div className="contact-btn">
                  <button type="button" class="btn">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
