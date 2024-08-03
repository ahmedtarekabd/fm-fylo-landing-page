import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import EarlyAccess from "../components/early-access";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <Features />
        <Cta />
        <Testimonials />
        <EarlyAccess />
      </div>
    </>
  );
}
