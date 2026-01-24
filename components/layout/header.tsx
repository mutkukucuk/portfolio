"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/blog" },
]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-14 items-center justify-between">
                    <div className="mr-4 hidden md:flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="hidden font-bold sm:inline-block">Utku Kucuk</span>
                        </Link>
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "transition-colors hover:text-foreground/80",
                                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            {/* Add search or other items here if needed */}
                        </div>
                        <ThemeToggle />
                    </div>
                </div>
            </Container>
        </header>
    )
}
