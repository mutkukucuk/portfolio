import { Container } from "@/components/layout/container"
import { getProjectBySlug, getAllProjects } from "@/lib/projects"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"

interface ProjectPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const projects = getAllProjects()
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)
    if (!project) {
        return {}
    }
    return {
        title: `${project.title} - Utku Kucuk`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params
    const project = getProjectBySlug(slug)

    if (!project) {
        notFound()
    }

    return (
        <article className="py-12 md:py-24 animate-in fade-in duration-500">
            <Container>
                <Link
                    href="/projects"
                    className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>

                {/* Header Section */}
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    View Source
                                </a>
                            )}
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                                >
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live Preview
                                </a>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.tags.map((tag) => (
                                <span key={tag} className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1">
                        {project.image ? (
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border shadow-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground">No Image Available</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-16 border-t border-border/50 pt-16">
                    <div className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight 
                        prose-code:text-primary prose-code:bg-muted prose-code:rounded prose-code:px-1 prose-code:before:content-[''] prose-code:after:content-['']
                        prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
                        prose-img:rounded-xl prose-img:border prose-img:border-border">
                        <MDXRemote source={project.content} />
                    </div>
                </div>
            </Container>
        </article>
    )
}
