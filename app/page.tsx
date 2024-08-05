import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./hero";
import GridSection from "./components/GridSection";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Testimonial from "./components/Testimoanial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="w-full min-h-[600px] dark:bg-grid-white/[0.03] bg-grid-black/[0.04] border-b mb-14">
        <Navbar/>
        <Hero/>
      </div>
      <GridSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
