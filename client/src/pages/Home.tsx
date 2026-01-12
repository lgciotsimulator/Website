import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Expertise } from '@/components/Expertise';
import { Projects } from '@/components/Projects';
import { Team } from '@/components/Team';
import { Achievements } from '@/components/Achievements';
import { Industry } from '@/components/Industry';
import { Connect } from '@/components/Connect';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Industry />
        <Projects />
        <Team />
        <Achievements />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}