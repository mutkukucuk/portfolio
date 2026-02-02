"use client"

import { Container } from "@/components/layout/container"
import { FadeIn, FadeInStagger, fadeInItemVariants } from "@/components/ui/fade-in"
import { motion } from "framer-motion"

const skillCategories = [
    {
        name: "Backend",
        skills: ["Node.js", "Express.js", "Java", "Spring Boot", "C#", "PHP", "gRPC"],
    },
    {
        name: "DevOps & Cloud",
        skills: ["Docker", "Linux", "Nginx", "AWS", "CI/CD", "Git"],
    },
    {
        name: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "MSSQL", "Realm"],
    },
    {
        name: "Embedded & IoT",
        skills: ["ESP32", "Arduino", "MQTT", "C/C++", "Home Assistant"],
    },
]

export function TechStack() {
    return (
        <section className="py-12 md:py-24">
            <Container>
                <FadeIn>
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
                        <p className="mt-4 text-muted-foreground">
                            A curated list of technologies I use to build robust applications.
                        </p>
                    </div>
                </FadeIn>

                <FadeInStagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category) => (
                        <motion.div variants={fadeInItemVariants} key={category.name} className="flex flex-col gap-4 rounded-xl border border-border/50 bg-card p-6">
                            <h3 className="text-xl font-semibold">{category.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </FadeInStagger>
            </Container>
        </section>
    )
}
