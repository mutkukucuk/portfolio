"use client"

import { motion } from "framer-motion"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
}: FadeInProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInStagger({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1, delayChildren: delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const fadeInItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export function FadeInItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div variants={fadeInItemVariants} className={className}>
            {children}
        </motion.div>
    )
}
