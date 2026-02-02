"use client"

import { Container } from "@/components/layout/container"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/ui/fade-in"

const experience = [
    {
        company: "Nova UAV Club",
        role: "Software Developer",
        period: "Nov 2024 - Apr 2025",
        description: "Contributed to UAV-related image processing tasks using OpenCV. implemented frame processing, color segmentation, and object detection scenarios while validating camera data pipelines.",
    },
    {
        company: "Covalent Coin",
        role: "Remote Software Developer",
        period: "Jun 2023 - Sep 2024",
        description: "Developed backend services and designed data flows between services and client applications. Implemented API endpoints and supported system integration efforts in a distributed team environment.",
    },
    {
        company: "Teknolojik Çözüm",
        role: "Software Specialist",
        period: "Aug 2022 - Feb 2023",
        description: "Managed backend service deployment and Linux-based server environments. Containerized services using Docker and configured Nginx reverse proxies used for exposing secure services.",
    },
    {
        company: "Bil Holding",
        role: "Software Intern",
        period: "Oct 2020 - Jan 2021",
        description: "Developed frontend components for corporate web projects and provided support for mobile and IoT-based initiatives.",
    },
    {
        company: "Kale Kalıp",
        role: "Software Intern",
        period: "Mar 2020 - May 2020",
        description: "Assisted in backend-oriented development tasks and IoT-related projects involving device data processing. Supported implementation and testing of business logic modules.",
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
