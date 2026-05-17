import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MetricStrip } from "@/components/MetricStrip";
import { Resume } from "@/components/Resume";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricStrip />
        <About />
        <Work />
        <Resume />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
