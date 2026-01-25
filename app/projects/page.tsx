import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/home/project-card"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
    title: "Projects - Utku Kucuk",
    description: "A showcase of my recent projects.",
}

export default function ProjectsPage() {
    // Get projects from MDX files
    const projects = getAllProjects()

    return (
        <Container className="py-24">
            <div className="flex flex-col gap-8">
                <FadeIn>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
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
                                image={project.image}
                                slug={project.slug}
                                className="h-full"
                            />
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </div>
        </Container>
    )
}
