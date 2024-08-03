import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <Features />
        <Cta />
      </div>
    </>
  );
}
