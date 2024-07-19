import React, { useState } from "react";
import TestimonialForm from "./TestimonialForm";
import TestimonialView from "./TestimonialView";
import Button from "./Button";


function Testimonial() {
  const [formFlag, setFormFlag] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center m-8">
      {!formFlag && <Button onClick={()=>{setFormFlag(true)}}>Add Testimonial</Button>}
      {formFlag && <TestimonialForm setFormFlag={setFormFlag} />}
      <TestimonialView />
    </div>
  );
}

export default Testimonial;
