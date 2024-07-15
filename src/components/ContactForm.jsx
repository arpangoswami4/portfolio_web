import React, { useState } from "react";
import Input from "./Input";
import InputRow from "./InputRow";
import Button from "./Button";
import portFolioApi from "../api/portfolioApi";

const ContactForm = () => {
  const [formData, setFromData] = useState({});
  const [response, setResponse] = useState(null);

  const onChangeHandler = (event) => {
    setFromData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = Object.fromEntries((new FormData(event.target).entries()));
    portFolioApi
      .post("/visitors", formData)
      .then((res) => {
        setFromData({});
        setResponse(res.data);
      })
      .catch((error) => {
        setResponse(error.response.data);
      });
  };
  return (
    <section className="flex flex-col w-full justify-center items-center">
      <h3 className="text-black text-4xl">
        <span className="text-secondary">Contact</span> Me!
      </h3>
      <form className="my-8 text-black" onSubmit={handleSubmit}>
        <InputRow className="flex">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={onChangeHandler}
            value={formData["firstName"] ? formData["firstName"] : ""}
            error={response?.errors}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChangeHandler}
            value={formData["lastName"] ? formData["lastName"] : ""}
            error={response?.errors}
          />
        </InputRow>
        <InputRow>
          <Input
            type="phone"
            name="phoneNumber"
            placeholder="Phone"
            value={formData["phoneNumber"] ? formData["phoneNumber"] : ""}
            onChange={onChangeHandler}
            required={false}
            error={response?.errors}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData["email"] ? formData["email"] : ""}
            onChange={onChangeHandler}
            error={response?.errors}
          />
        </InputRow>
        <InputRow>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            cols="77"
            value={formData["message"] ? formData["message"] : ""}
            className="border-2 border-tertiary rounded-lg p-3 shadow-lg"
            onChange={onChangeHandler}
            error={response?.errors}
          ></textarea>
        </InputRow>
        {response && (
          <div className="my-2">
            {response.success === false && (
              <span className="text-red-700">
                Message was not sent, fix the error and submit again.
              </span>
            )}
            {response.success === true && (
              <span className="text-green-700">
                Message was successfully sent, you receive a mail with the
                confirmation soon.
              </span>
            )}
          </div>
        )}
        <div className="flex justify-center">
          <Button styleProps="text-white">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
