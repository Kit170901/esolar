import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Calculator } from "@/components/sections/Calculator";
import { Process } from "@/components/sections/Process";
import { Benefits } from "@/components/sections/Benefits";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <About />
      <Services />
      <Calculator />
      <Process />
      <Benefits />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </main>
  );
}
