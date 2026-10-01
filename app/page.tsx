import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { SystemsMap, SystemTrace, PlanningDemo, Reliability } from '@/components/InteractiveSections';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Experience />
      <Projects />
      <SystemsMap />
      <PlanningDemo />
      <SystemTrace />
      <Reliability />
      <Contact />
    </main>
  );
}
