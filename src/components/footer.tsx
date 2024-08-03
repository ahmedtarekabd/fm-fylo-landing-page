import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import Link from "next/link";
import logo from "@/public/assets/images/logo.svg";
import location from "@/public/assets/images/icon-location.svg";
import phone from "@/public/assets/images/icon-phone.svg";
import email from "@/public/assets/images/icon-email.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[hsl(216_53%_9%)] container pt-52 pb-12 grid grid-cols-1 lg:grid-cols-6 gap-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:col-span-3">
        <div className="space-y-10">
          <Link href="#" className="inline-block">
            <Image priority src={logo} alt="Logo" />
          </Link>
          <div className="flex gap-8">
            <Image
              priority
              src={location}
              className="w-5 h-6 shrink-0"
              alt="Logo"
            />
            <p className="text-sm">
              Fylo is a secure file storage and sharing platform that helps you
              keep your data safe and accessible from anywhere.
            </p>
          </div>
        </div>
        <div className="shrink-0 space-y-4">
          <p className="flex gap-8 text-sm">
            <Image
              priority
              src={phone}
              className="w-5 h-5 shrink-0"
              alt="Logo"
            />
            +1-543-123-4567
          </p>
          <p className="flex gap-8 text-sm">
            <Image
              priority
              src={email}
              className="w-5 h-5 shrink-0"
              alt="Logo"
            />
            example@fylo.com
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="#" className="text-lg font-light">
          About Us
        </Link>
        <Link href="#" className="text-lg font-light">
          Jobs
        </Link>
        <Link href="#" className="text-lg font-light">
          Press
        </Link>
        <Link href="#" className="text-lg font-light">
          Blog
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link href="#" className="text-lg font-light">
          Contact Us
        </Link>
        <Link href="#" className="text-lg font-light">
          Terms
        </Link>
        <Link href="#" className="text-lg font-light">
          Privacy
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
