import { Hero } from "@/components/home/hero";
import { Experience } from "@/components/home/experience";
import { TechStack } from "@/components/home/tech-stack";
import { BentoGrid } from "@/components/home/bento-grid";
import { ProjectCard } from "@/components/home/project-card";
import { getAllProjects } from "@/lib/projects";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import { Container } from "@/components/layout/container";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main>
      <Hero />
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <TechStack />
      </div>
      <div id="projects">
        <Container className="py-24">
          <div className="flex flex-col gap-8">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
                <p className="mt-4 text-muted-foreground">
                  A showcase of my recent work and side projects.
                </p>
              </div>
            </FadeIn>
            <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <FadeInItem key={project.slug}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    href={project.liveUrl}
                    githubUrl={project.githubUrl}
                    tags={project.tags}
                    slug={project.slug}
                    className="h-full"
                  />
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </div>
      <div id="about">
        <BentoGrid />
      </div>
    </main>
  );
}
