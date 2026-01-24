import { Container } from "@/components/layout/container"

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6 md:px-8 md:py-0">
            <Container>
                <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by <span className="font-medium underline underline-offset-4">Utku Kucuk</span>.
                        The source code is available on <a href="https://github.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
                    </p>
                </div>
            </Container>
        </footer>
    )
}
