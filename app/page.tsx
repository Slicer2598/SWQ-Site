import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <WhoItsFor />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
