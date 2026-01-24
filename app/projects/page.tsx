import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/home/project-card"

export const metadata = {
    title: "Projects - Utku Kucuk",
    description: "A showcase of my recent projects.",
}

const projects = [
    {
        title: "Utku Blog",
        description:
            "A personal portfolio and blog built with Next.js 14, Tailwind CSS, and MDX. Features a clean, modern design with dark mode support.",
        href: "https://utkublog.com",
        githubUrl: "https://github.com/utkukucuk/utku-blog",
        tags: ["Next.js", "React", "Tailwind CSS", "MDX"],
    },
    {
        title: "E-Commerce Dashboard",
        description:
            "A comprehensive dashboard for managing online stores. Includes analytics, inventory management, and order processing.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/dashboard",
        tags: ["React", "TypeScript", "Recharts", "Supabase"],
    },
    {
        title: "Task Master",
        description:
            "A productivity application for managing daily tasks and projects. Built with a focus on simplicity and speed.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/task-master",
        tags: ["Vue.js", "Firebase", "Pinia"],
    },
    {
        title: "Weather App",
        description:
            "A beautiful weather application that provides real-time forecasts and historical data visualization.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/weather-app",
        tags: ["Svelte", "D3.js", "OpenWeatherMap API"],
    },
]

export default function ProjectsPage() {
    return (
        <Container className="py-24">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
                    <p className="mt-4 text-muted-foreground">
                        A showcase of my recent work and side projects.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </Container>
    )
}
