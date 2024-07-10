import React from "react";
import Input from "./Input";
import InputRow from "./InputRow";
import Button from "./Button";

const ContactForm = () => {
  return (
    <section className="flex flex-col m-16 w-full justify-center items-center">
      <h3 className="text-black text-4xl">
        <span className="text-secondary">Contact</span> Me!
      </h3>
      <form className="my-8 text-black">
        <InputRow className="flex">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          ></Input>
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          ></Input>
        </InputRow>
        <InputRow>
          <Input
            type="phone"
            name="phoneNumber"
            placeholder="Phone"
            required
          ></Input>
          <Input type="email" name="email" placeholder="Email" required></Input>
        </InputRow>
        <InputRow>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="8"
            cols="77"
            className="border-2 border-s-fuchsia-100 rounded-lg p-3 shadow-lg"
          ></textarea>
        </InputRow>
        <div className="flex justify-center">
          <Button extraProps="text-white">Send Message</Button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
