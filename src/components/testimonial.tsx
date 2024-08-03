import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type TestimonialProps = {
  text: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
};

const Testimonial = ({ text, author }: TestimonialProps) => {
  return (
    <Card className="border-0">
      <CardContent className="p-6">
        <p className="text-sm font-light leading-relaxed">{text}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <Image
          src={author.avatar}
          alt={author.name}
          className="rounded-full w-8 h-8"
          width={1000}
          height={0}
        />
        <div>
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs font-light">{author.title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Testimonial;
