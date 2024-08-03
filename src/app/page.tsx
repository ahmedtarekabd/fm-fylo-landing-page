import Cta from "@/components/cta";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <Features />
        <Cta />
        <Testimonials />
      </div>
    </>
  );
}
