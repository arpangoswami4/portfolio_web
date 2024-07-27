import React, { useState, useEffect } from "react";
import TestimonialForm from "./TestimonialForm";
import TestimonialView from "./TestimonialView";
import Button from "./Button";
import portFolioApi from "../api/portfolioApi";

function Testimonial() {
  const [formFlag, setFormFlag] = useState(false);
  const [success, setSuccess] = useState(false);
  const [testimonialItems, setTestimonialItems] = useState([]);

  useEffect(() => {
    if (success) {
      portFolioApi
        .get("/testimonials")
        .then((response) => {
          setTestimonialItems(response.data);
        })
        .catch();
    }
  }, [success]);

  useEffect(() => {
    portFolioApi
      .get("/testimonials")
      .then((response) => {
        setTestimonialItems(response.data);
      })
      .catch();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center m-8">
      {!formFlag && (
        <Button
          onClick={() => {
            setFormFlag(true);
            setSuccess(false);
          }}
        >
          Add Testimonial
        </Button>
      )}
      {success === true && (
        <div className="my-2">
          <span className="text-green-700">
            Testimonial was successfully posted, you can view your testimonial
            on the carousel below.
          </span>
        </div>
      )}
      {formFlag && (
        <TestimonialForm setFormFlag={setFormFlag} setSuccess={setSuccess} />
      )}
      {testimonialItems.length > 0 && (
        <TestimonialView testimonialItems={testimonialItems} />
      )}
    </div>
  );
}

export default Testimonial;
