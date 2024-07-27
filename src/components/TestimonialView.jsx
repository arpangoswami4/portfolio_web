import React from "react";
import { Carousel } from "primereact/carousel";
import TestimonialTemplate from "./TestimonialTemplate";
import { Icon } from "@iconify/react/dist/iconify.js";

const TestimonialView = ({ testimonialItems }) => {
  return (
    <section className="flex w-3/4 justify-center items-center">
      <div className="flex justify-center my-12 text-black">
        <Carousel
          value={testimonialItems}
          numVisible={1}
          numScroll={1}
          showIndicators={false}
          prevIcon={
            <Icon
              icon={"fluent:previous-24-regular"}
              className="text-secondary bg-white w-12 h-12"
            />
          }
          nextIcon={
            <Icon
              icon={"fluent:next-24-regular"}
              className="text-secondary bg-white w-12 h-12"
            />
          }
          autoplayInterval={3000}
          itemTemplate={TestimonialTemplate}
          circular={true}
        />
      </div>
    </section>
  );
};

export default TestimonialView;
