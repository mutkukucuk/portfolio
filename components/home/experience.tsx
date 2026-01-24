"use client"

import { Container } from "@/components/layout/container"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/ui/fade-in"

const experience = [
    {
        company: "Tech Corp Inc.",
        role: "Senior Full Stack Developer",
        period: "2023 - Present",
        description: "Leading a team of 5 developers to build scalable SaaS products. Implemented microservices architecture and improved system reliability by 99.9%.",
    },
    {
        company: "Creative Agency",
        role: "Mid-Level Frontend Developer",
        period: "2021 - 2023",
        description: "Developed pixel-perfect user interfaces for high-profile clients. Utilized React, Next.js, and Framer Motion to create immersive experiences.",
    },
    {
        company: "StartUp Land",
        role: "Junior Developer",
        period: "2019 - 2021",
        description: "Collaborated with cross-functional teams to ship features rapidly. Gained expertise in JavaScript, TypeScript, and version control.",
    },
]

export function Experience() {
    return (
        <section className="py-12 md:py-24 bg-secondary/30">
            <Container>
                <FadeIn>
                    <div className="mb-12 flex items-center gap-3">
                        <Briefcase className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
                    </div>
                </FadeIn>

                <div className="mx-auto max-w-3xl">
                    <FadeInStagger className="relative border-l border-border/50 pl-8 ml-3 space-y-12">
                        {experience.map((job, index) => (
                            <motion.div key={index} variants={fadeInItemVariants} className="relative">
                                {/* Dot on timeline */}
                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />

                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                                        {job.period}
                                    </span>
                                </div>
                                <div className="text-lg font-medium text-foreground/80">{job.company}</div>
                                <p className="mt-3 text-muted-foreground leading-relaxed">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))}
                    </FadeInStagger>
                </div>
            </Container>
        </section>
    )
}
