import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TestimonialTemplate = (testimonial) => {
  return (
    <div className="flex flex-col justify-center items-center overflow-y-auto h-[30rem] border-2 p-6 text-center gap-y-4 border-zinc-300 rounded-lg">
      <div className="mb-1">
        {testimonial.picture && (
          <img
            src={testimonial.picture}
            className="rounded-3xl object-cover h-40 w-40"
            alt={testimonial.name}
          />
        )}
        {!testimonial.picture && (
          <Icon
            icon={"el:user"}
            className="rounded-3xl object-cover w-full h-40"
          />
        )}
      </div>
      <div className="mb-3">
        <h4 className="text-3xl">{testimonial.name}</h4>
        {testimonial.headline && (
          <h6 className="mb-1 text-base">{testimonial.headline}</h6>
        )}
      </div>
      <p className="italic">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialTemplate;
