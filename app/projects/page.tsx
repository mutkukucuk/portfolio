import { Container } from "@/components/layout/container"
import { ProjectCard } from "@/components/home/project-card"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in"

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
        image: "/projects/blog.jpg",
        slug: "utku-blog",
    },
    {
        title: "E-Commerce Dashboard",
        description:
            "A comprehensive dashboard for managing online stores. Includes analytics, inventory management, and order processing.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/dashboard",
        tags: ["React", "TypeScript", "Recharts", "Supabase"],
        image: "/projects/dashboard.jpg",
        slug: "dashboard",
    },
    {
        title: "Task Master",
        description:
            "A productivity application for managing daily tasks and projects. Built with a focus on simplicity and speed.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/task-master",
        tags: ["Vue.js", "Firebase", "Pinia"],
        image: "/projects/task.jpg",
        slug: "task-master",
    },
    {
        title: "Weather App",
        description:
            "A beautiful weather application that provides real-time forecasts and historical data visualization.",
        href: "https://example.com",
        githubUrl: "https://github.com/utkukucuk/weather-app",
        tags: ["Svelte", "D3.js", "OpenWeatherMap API"],
        image: "/projects/weather.jpg",
        slug: "weather-app",
    },
    {
        title: "Project Styles & Assets",
        description:
            "A reference guide (Kitchen Sink) showing all available content layouts, headers, and assets for project case studies.",
        href: "#",
        tags: ["Documentation", "Style Guide", "Reference"],
        slug: "style-guide",
    },
]

export default function ProjectsPage() {
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
                        <FadeInItem key={project.title}>
                            <ProjectCard {...project} className="h-full" />
                        </FadeInItem>
                    ))}
                </FadeInStagger>
            </div>
        </Container>
    )
}
