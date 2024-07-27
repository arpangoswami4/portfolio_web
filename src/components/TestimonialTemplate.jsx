import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const TestimonialTemplate = (testimonial) => {
  return (
    <div className="flex flex-col overflow-y-auto h-[30rem] gap-4 border-2 p-6 text-center border-zinc-300 rounded-lg">
      <div className="mb-3 flex justify-center">
        {testimonial.picture && (
          <img
            src={testimonial.picture}
            className="rounded-3xl object-cover w-36 h-36"
            alt={testimonial.name}
          />
        )}
        {!testimonial.picture && (
          <Icon
            icon={"el:user"}
            className="rounded-3xl object-cover w-24 h-24"
            alt={testimonial.name}
          />
        )}
      </div>
      <div>
        <div className="mb-3">
          <h4 className="mb-1 text-3xl">{testimonial.name}</h4>
          {testimonial.headline && (
            <h6 className="mb-1 text-lg">{testimonial.headline}</h6>
          )}
        </div>
        <p className="italic">{testimonial.quote}</p>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
