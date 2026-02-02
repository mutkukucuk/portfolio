"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    title: string
    description: string
    href?: string
    githubUrl?: string
    tags: string[]
    slug?: string // Internal slug for case study
    className?: string
}

export function ProjectCard({
    title,
    description,
    href,
    githubUrl,
    tags,
    slug,
    className,
}: ProjectCardProps) {
    return (
        <div
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-background/50 transition-all hover:border-border hover:bg-background/80 h-full",
                className
            )}
        >
            {/* Main Card Link - Removed as per request */}

            <div className="flex flex-col gap-4 p-6 pointer-events-none">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">{title}</h3>
                    <div className="flex gap-2 relative z-20 pointer-events-auto">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                aria-label="View Source"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {/* Live Link - Hidden for now
                        {href && (
                            <a
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground transition-colors hover:text-foreground"
                                aria-label="View Project"
                            >
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                        */}
                    </div>
                </div>
                <p className="text-muted-foreground line-clamp-3">{description}</p>
            </div>

            <div className="mt-auto px-6 pb-6 flex flex-wrap gap-2 pointer-events-none">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}
