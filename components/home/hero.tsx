"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32">
            <Container className="relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                                Utku Kucuk
                            </h1>
                            <h2 className="mt-4 text-2xl font-medium text-muted-foreground sm:text-3xl">
                                Senior Full Stack Engineer
                            </h2>
                        </div>

                        <p className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            I architect and build scalable web applications. Specializing in Modern React, Cloud Infrastructure, and Technical Leadership.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/resume.pdf" // Placeholder path
                                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </a>
                            <Link
                                href="#contact"
                                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            >
                                <Mail className="mr-2 h-4 w-4" />
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
                            {/* Decorative blob or circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl" />

                            {/* Image Container */}
                            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-2xl">
                                {/* Placeholder for profile image - Use a nice gradient or initials if no image */}
                                <div className="flex h-full w-full items-center justify-center bg-muted text-4xl font-bold text-muted-foreground">
                                    <img src="/me.jpg" alt="Utku Kucuk" />
                                </div>
                                {/* <Image src="/profile.jpg" alt="Utku Kucuk" fill className="object-cover" /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
