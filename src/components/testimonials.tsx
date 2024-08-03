import React from "react";
import Testimonial from "./testimonial";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-20 mx-10 relative">
      <div className="absolute -top-8 -left-2 -z-10">
        <Image
          src="/assets/images/bg-quotes.png"
          alt="quotes"
          className="object-contain w-10 h-10"
          width={1000}
          height={0}
        />
      </div>
      <Testimonial
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        author={{
          name: "Satish Patel",
          title: "Founder & CEO, Huddle",
          avatar: "/assets/images/profile-1.jpg",
        }}
      />
      <Testimonial
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        author={{
          name: "Bruce McKenzie",
          title: "Founder & CEO, Huddle",
          avatar: "/assets/images/profile-2.jpg",
        }}
      />
      <Testimonial
        text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        author={{
          name: "Iva Boyd",
          title: "Founder & CEO, Huddle",
          avatar: "/assets/images/profile-3.jpg",
        }}
      />
    </div>
  );
};

export default Testimonials;
