import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { TechStack } from "@/components/home/tech-stack";
import { BentoGrid } from "@/components/home/bento-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <TechStack />
      </div>
      <div id="about">
        <BentoGrid />
      </div>
    </main>
  );
}
