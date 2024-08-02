import Image from "next/image";
import { Button } from "./ui/button";
import heroBG from "@/public/assets/images/bg-curvy-mobile.svg";

const Hero = () => {
  return (
    <div className="flex flex-col text-center items-center justify-center gap-8 mx-auto max-w-[600px]">
      <Image
        src="/assets/images/illustration-intro.png"
        alt="Hero image"
        className="object-cover w-full"
        width={1440}
        height={0}
      />
      <div className="w-full bg-white/5 absolute top-0 left-0 h-96"></div>
      <Image
        src={heroBG}
        alt="BG image"
        className="w-full bg-white/5 fill-white absolute top-96 left-0 -z-10"
        width={1440}
        height={0}
      />
      <h2 className="text-3xl font-bold text-destructive-foreground">
        All your files in one secure location, accessible anywhere.
      </h2>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-lg">
          Fylo stores all our most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family and co-workers.
        </p>
        <Button
          className="font-semibold p-28 py-8 text-lg"
          variant={"gradient"}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
