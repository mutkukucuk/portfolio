"use client"

import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Cpu,
    Code2,
    Terminal,
} from "lucide-react"
import { Container } from "@/components/layout/container"
import { cn } from "@/lib/utils"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

export function BentoGrid() {
    return (
        <section className="py-12 md:py-24">
            <Container>
                <FadeIn>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
                        <p className="mt-4 text-muted-foreground">
                            A glimpse into my world, skills, and current focus.
                        </p>
                    </div>
                </FadeIn>

                <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-8">
                    {/* Card 1: Main About */}
                    <motion.div variants={fadeInItemVariants} className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border border-border/50 bg-card p-6 md:col-span-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Who I am</h3>
                            <p className="text-muted-foreground">
                                I'm a passionate full-stack developer with a knack for building beautiful, functional web applications.
                                I love turning complex problems into simple, elegant solutions.
                            </p>
                        </div>
                        <div className="mt-8 flex gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                                <Terminal className="h-5 w-5" />
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                                <Code2 className="h-5 w-5" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Location */}
                    <motion.div variants={fadeInItemVariants} className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-4 rounded-xl border border-border/50 bg-card p-6 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <MapPin className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Based in</h3>
                            <p className="text-muted-foreground">Istanbul, Turkey</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Tech Stack */}
                    <motion.div variants={fadeInItemVariants} className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border border-border/50 bg-card p-6 md:col-span-1">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Tech Stack</h3>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"].map((tech) => (
                                    <span key={tech} className="rounded-md bg-secondary px-2 py-1 text-xs font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Cpu className="mt-4 h-8 w-8 text-muted-foreground/20" />
                    </motion.div>

                    {/* Card 4: Socials */}
                    <motion.div variants={fadeInItemVariants} className="col-span-1 row-span-1 flex flex-col justify-between rounded-xl border border-border/50 bg-card p-6 md:col-span-2">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Connect</h3>
                            <p className="text-muted-foreground">
                                Feel free to reach out for collaborations or just a friendly hello.
                            </p>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Github className="h-5 w-5" />
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="text-sm font-medium">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:example@example.com"
                                className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                                <Mail className="h-5 w-5" />
                                <span className="text-sm font-medium">Email</span>
                            </a>
                        </div>
                    </motion.div>
                </FadeInStagger>
            </Container>
        </section>
    )
}
