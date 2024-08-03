import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const Cta = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-20">
      <Image
        src="/assets/images/illustration-stay-productive.png"
        alt="Stay productive illustration"
        className="w-full lg:w-3/4"
        width={1000}
        height={0}
      />
      <div className="space-y-4">
        <h2 className="font-semibold text-2xl">
          Stay productive, wherever you are
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="w-max space-y-1">
          <Link href="#" className="flex items-center gap-2 text-accent">
            See how Fylo works
            <Image
              src="/assets/images/icon-arrow.svg"
              alt="Arrow icon"
              width={24}
              height={24}
            />
          </Link>
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Cta;
